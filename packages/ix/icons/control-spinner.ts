import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControlSpinnerIcon],svg[ix-control-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64C149.961 64 64 149.961 64 256c0 39.476 11.913 76.169 32.341 106.681l35.48-23.707c-15.888-23.731-25.154-52.271-25.154-82.974c0-82.475 66.858-149.333 149.333-149.333zm0 405.333c117.821 0 213.333-95.512 213.333-213.333S373.821 42.667 256 42.667S42.667 138.179 42.667 256S138.179 469.333 256 469.333M256 384c70.692 0 128-57.308 128-128s-57.308-128-128-128s-128 57.308-128 128s57.308 128 128 128" clip-rule="evenodd"></svg:path>`,
})
export class IxControlSpinnerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
