import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSkipPreviousCircleOutlineIcon],svg[mdi-skip-previous-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m4 4v8l-5-4m-1-4v8H8V8"></svg:path>`,
})
export class MdiSkipPreviousCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
