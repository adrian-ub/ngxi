import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFastForwardCircleFilledIcon],svg[pepicons-pencil-fast-forward-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilFastForwardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.5 17.796L11.981 13L6.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506L7.159 7.451c-.647-.566-1.659-.106-1.659.753v9.592a1 1 0 0 0 1.659.753z"></svg:path><svg:path d="M13.5 17.796L18.981 13L13.5 8.204zm6.14-4.043a1 1 0 0 0 0-1.506l-5.482-4.796c-.646-.566-1.658-.106-1.658.753v9.592a1 1 0 0 0 1.659.753z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilFastForwardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilFastForwardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
