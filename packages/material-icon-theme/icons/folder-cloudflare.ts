import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCloudflareIcon],svg[material-icon-theme-folder-cloudflare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff8a65" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#EFEBE9" d="M27.881 19.229a6.591 6.591 0 0 0-12.308-1.759a5.278 5.278 0 0 0 .572 10.524h11.428a4.388 4.388 0 0 0 .308-8.765"></svg:path>`,
})
export class MaterialIconThemeFolderCloudflareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
