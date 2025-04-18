import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSbIcon],svg[flagpack-sb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3D58DB" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackSb0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackSb0)"><svg:path fill="#579D20" fill-rule="evenodd" d="M0 24h32V0z" clip-rule="evenodd"></svg:path><svg:path fill="#FECA00" d="m-.782 24.745l-1.804-2.496L33.675-1.954L35.48.542z"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M3.653 6.547L5.017 5.6l1.428.85l-.5-1.524l.998-1.091H5.59l-.573-1.602l-.574 1.602l-1.355.056l1.001 1.035zm5.658 0l1.364-.946l1.428.85l-.5-1.524l.999-1.091h-1.354l-.573-1.602l-.573 1.602l-1.356.056l1.001 1.035z" clip-rule="evenodd"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="m6.648 9.455l1.364-.946l1.428.85l-.5-1.524l.998-1.091H8.585l-.573-1.602l-.574 1.602l-1.355.056l1 1.035zM5.017 11.6l-1.364.946l.436-1.62l-1.001-1.035l1.355-.056l.574-1.602l.573 1.602h1.353l-.998 1.09l.5 1.525zm5.658 0l-1.364.946l.436-1.62l-1-1.035l1.355-.056l.573-1.602l.573 1.602h1.354l-1 1.09l.501 1.525z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackSbIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
