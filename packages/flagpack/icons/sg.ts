import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSgIcon],svg[flagpack-sg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackSg0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackSg0)"><svg:path fill="#E31D1C" d="M0 0v12h32V0z"></svg:path><svg:path fill="#F1F9FF" d="M8.868 10.59S6.043 9.453 6.043 6.374s2.825-4.179 2.825-4.179c-1.373-.347-5.017-.037-5.017 4.179s3.589 5.01 5.017 4.216m.724-.51l.811-.489l.829.49l-.203-.955l.673-.754h-.912l-.387-.891l-.387.891l-.914.039l.675.715zm3.757-.543l-.81.489l.185-.955l-.675-.715l.914-.038l.386-.892l.387.892h.912l-.673.753l.203.955zM11.287 5.77l.81-.49l.83.49l-.203-.955l.673-.753h-.912l-.387-.892l-.387.892l-.914.038l.675.715zM9.37 7.223l-.81.489l.184-.955l-.675-.715l.914-.038l.387-.892l.387.892h.912l-.673.753l.202.955zm4.548.445l.81-.49l.829.49l-.203-.955l.673-.753h-.912l-.387-.892l-.386.892l-.915.039l.675.714z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackSgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
