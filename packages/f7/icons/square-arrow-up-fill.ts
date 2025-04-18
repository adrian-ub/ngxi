import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SquareArrowUpFillIcon],svg[f7-square-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.012 19.34c1.008 0 1.851-.82 1.851-1.805v-7.336l-.14-3.492l1.593 1.664l3.54 3.773c.328.375.82.563 1.265.563c.984 0 1.711-.703 1.711-1.64c0-.516-.187-.891-.539-1.243l-7.922-7.64c-.469-.47-.89-.633-1.36-.633c-.491 0-.89.164-1.359.633l-7.922 7.64c-.351.352-.562.727-.562 1.242c0 .938.703 1.64 1.688 1.64c.468 0 .96-.187 1.288-.562l3.563-3.773l1.594-1.687l-.164 3.515v7.336c0 .984.867 1.805 1.875 1.805M14.559 54.45H41.44c4.922 0 7.36-2.438 7.36-7.267V24.778c0-4.828-2.438-7.265-7.36-7.265H30.402V34.27c0 1.29-1.101 2.368-2.39 2.368c-1.313 0-2.39-1.078-2.39-2.368V17.512H14.558c-4.875 0-7.36 2.414-7.36 7.265v22.407c0 4.851 2.485 7.265 7.36 7.265"></svg:path>`,
})
export class F7SquareArrowUpFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
