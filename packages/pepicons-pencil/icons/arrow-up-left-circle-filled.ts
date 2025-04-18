import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilArrowUpLeftCircleFilledIcon],svg[pepicons-pencil-arrow-up-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilArrowUpLeftCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.948 15.145a.5.5 0 0 1-.453-.543l.471-5.186a.5.5 0 0 1 .996.09l-.471 5.186a.5.5 0 0 1-.543.453"></svg:path><svg:path d="M15.148 8.945a.5.5 0 0 1-.453.543L9.51 9.96a.5.5 0 0 1-.09-.996l5.185-.472a.5.5 0 0 1 .543.453"></svg:path><svg:path d="M9.647 9.643a.5.5 0 0 1 .707 0l6.535 6.536a.5.5 0 1 1-.707.707l-6.535-6.535a.5.5 0 0 1 0-.708"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilArrowUpLeftCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilArrowUpLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
