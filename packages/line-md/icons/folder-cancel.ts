import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdFolderCancelIcon],svg[line-md-folder-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdFolderCancel0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path d="M12 7h-9v0c0 0 0.45 0 1 0h6z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 7h-9v0c0 0 0.45 0 1 0h6z;M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdFolderCancel0)"></svg:rect>`,
})
export class LineMdFolderCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
