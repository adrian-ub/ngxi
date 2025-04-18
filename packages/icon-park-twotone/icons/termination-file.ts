import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTerminationFileIcon],svg[icon-park-twotone-termination-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTerminationFile0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10"></svg:path><svg:path d="M16 14h13m-13 7h5"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M34 44c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="m27 27l14 14"></svg:path><svg:path stroke-linejoin="round" d="M24 34c0-5.523 4.477-10 10-10m0 20c5.523 0 10-4.477 10-10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTerminationFile0)"></svg:path>`,
})
export class IconParkTwotoneTerminationFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
