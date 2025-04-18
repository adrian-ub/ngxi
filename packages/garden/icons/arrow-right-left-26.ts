import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowRightLeft26Icon],svg[garden-arrow-right-left-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.293 14.293c.602-.603 1.614-.22 1.701.593L9 15v3h13a1 1 0 0 1 .117 1.993L22 20H8.999L9 23c0 .852-.986 1.297-1.623.783l-.084-.076l-4-4a1 1 0 0 1-.083-1.32l.083-.094zM17 3c0-.852.986-1.297 1.623-.783l.084.076l4 4a1 1 0 0 1 .083 1.32l-.083.094l-4 4c-.602.603-1.614.22-1.701-.593L17 11V8H4a1 1 0 0 1-.117-1.993L4 6h13z"></svg:path>`,
})
export class GardenArrowRightLeft26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
