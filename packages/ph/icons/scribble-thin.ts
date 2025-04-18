import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScribbleThinIcon],svg[ph-scribble-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.84 186.83a18.61 18.61 0 0 0 0 26.34a4 4 0 0 1-5.66 5.66a26.63 26.63 0 0 1 0-37.66l9.38-9.37a18.63 18.63 0 1 0-26.35-26.34l-66.76 66.74a26.63 26.63 0 0 1-37.66-37.66l98.76-98.74a18.63 18.63 0 1 0-26.35-26.34L81.45 116.2a26.63 26.63 0 0 1-37.66-37.66l41.38-41.37a4 4 0 1 1 5.65 5.66L49.44 84.2a18.63 18.63 0 1 0 26.35 26.34l66.76-66.74a26.63 26.63 0 0 1 37.66 37.66L81.45 180.2a18.63 18.63 0 1 0 26.35 26.34l66.75-66.74a26.63 26.63 0 0 1 37.66 37.66Z"></svg:path>`,
})
export class PhScribbleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
