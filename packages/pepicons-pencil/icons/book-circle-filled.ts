import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilBookCircleFilledIcon],svg[pepicons-pencil-book-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilBookCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.08 7.304L5.244 6.019A1.5 1.5 0 0 0 3.5 7.5v9.738a1.5 1.5 0 0 0 1.268 1.482l8.155 1.275a.5.5 0 0 0 .577-.494V7.797a.5.5 0 0 0-.42-.493m-8-.298l7.42 1.216v10.694L4.923 17.73a.5.5 0 0 1-.423-.493V7.5a.5.5 0 0 1 .58-.494"></svg:path><svg:path d="M21 6a1.5 1.5 0 0 0-.243.02L12.92 7.303a.5.5 0 0 0-.419.493V19.5a.5.5 0 0 0 .577.494l8.155-1.276a1.5 1.5 0 0 0 1.268-1.481V7.5A1.5 1.5 0 0 0 21 6m.077 11.73L13.5 18.917V8.222l7.42-1.216a.5.5 0 0 1 .58.494v9.737a.5.5 0 0 1-.423.494"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilBookCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilBookCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
