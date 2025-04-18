import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNamurFailureIcon],svg[ix-namur-failure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M256 64C149.962 64 64 149.962 64 256c0 106.039 85.962 192 192 192c106.039 0 192-85.961 192-192c0-106.038-85.961-192-192-192m81.018 80.824l30.17 30.17L286.182 256l81.006 81.006l-30.17 30.17l-81.006-81.007l-80.855 80.857l-30.17-30.17L225.842 256l-80.855-80.855l30.17-30.17l80.855 80.855z"></svg:path>`,
})
export class IxNamurFailureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
