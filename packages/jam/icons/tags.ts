import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTagsIcon],svg[jam-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.586 15.071L13 13.657l1.414 1.414l6.165-6.165l1.09-3.552l-2.484-2.483l-1.079.336l-1.598-1.598L18.591.96a2 2 0 0 1 2.008.496l2.483 2.483a2 2 0 0 1 .498 2L22.345 9.97l-7.93 7.93l-2.83-2.828zM14.236.75l2.482 2.483a2 2 0 0 1 .498 2l-1.235 4.028l-7.93 7.931l-7.78-7.778L8.17 1.516L12.227.254a2 2 0 0 1 2.008.496zM3.1 9.414l4.95 4.95l6.164-6.165l1.09-3.552l-2.484-2.483l-3.585 1.115zm7.424-2.475a1.5 1.5 0 1 1 2.121-2.121a1.5 1.5 0 0 1-2.12 2.121zm6.886 1.022l.782-2.878q.674.228.917.518a1.5 1.5 0 0 1-.185 2.113q-.435.366-1.514.247"></svg:path>`,
})
export class JamTagsIcon {
  readonly viewBox = input("0 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
