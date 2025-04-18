import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilYuanCircleFilledIcon],svg[pepicons-pencil-yuan-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilYuanCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.832 5.584a.5.5 0 0 1 .694.139l5 7.5a.5.5 0 0 1-.832.554l-5-7.5a.5.5 0 0 1 .138-.693"></svg:path><svg:path d="M17.387 5.584a.5.5 0 0 0-.693.139l-5 7.5a.5.5 0 0 0 .832.554l5-7.5a.5.5 0 0 0-.139-.693"></svg:path><svg:path d="M7.11 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M12.11 13a.5.5 0 0 1 .5.5V20a.5.5 0 0 1-1 0v-6.5a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilYuanCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilYuanCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
