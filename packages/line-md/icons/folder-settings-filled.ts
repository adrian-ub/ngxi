import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdFolderSettingsFilledIcon],svg[line-md-folder-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path d="M12 7h-9v0c0 0 0.45 0 1 0h6z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 7h-9v0c0 0 0.45 0 1 0h6z;M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M8 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M16 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdFolderSettingsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
