import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLabelCircleFilledIcon],svg[pepicons-pencil-label-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLabelCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.474 6.474v.003a36 36 0 0 0-.115 1.815c-.058 1.46-.05 3.193.142 4.48a.4.4 0 0 0 .117.21l7.754 7.754a.5.5 0 0 0 .707 0l5.657-5.657a.5.5 0 0 0 0-.707l-7.754-7.754a.4.4 0 0 0-.21-.117c-1.287-.192-3.02-.2-4.48-.142a36 36 0 0 0-1.815.115zM5.59 5.59c-.097.092-.489 4.567-.077 7.33c.044.294.19.56.4.77l7.753 7.754a1.5 1.5 0 0 0 2.121 0l5.657-5.657a1.5 1.5 0 0 0 0-2.121L13.689 5.91a1.4 1.4 0 0 0-.77-.4c-2.763-.411-7.238-.02-7.33.078"></svg:path><svg:path d="M10.576 10.661a.5.5 0 1 0 .707.707a.5.5 0 0 0-.707-.707m-.707 1.414a1.5 1.5 0 1 1 2.121-2.121a1.5 1.5 0 0 1-2.12 2.121"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLabelCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLabelCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
