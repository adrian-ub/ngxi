import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopCircleFilledIcon],svg[pepicons-pencil-loop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLoopCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M7.828 7.828A5 5 0 1 0 14.9 14.9a5 5 0 0 0-7.07-7.07m6.364 6.364a4 4 0 1 1-5.656-5.657a4 4 0 0 1 5.656 5.657" clip-rule="evenodd"></svg:path><svg:path d="M14.192 15.627a1 1 0 0 1 1.415-1.414l2.828 2.829a1 1 0 1 1-1.414 1.414z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLoopCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLoopCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
