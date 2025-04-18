import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsCertificateIcon],svg[duo-icons-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 11c2.309 0 3.753 2.5 2.598 4.5a3 3 0 0 1-.598.736v4.955a.5.5 0 0 1-.724.447L19 21l-1.276.638a.5.5 0 0 1-.724-.447v-4.955c-1.721-1.54-1.13-4.365 1.064-5.086c.302-.099.618-.15.936-.15m-7-2H6a1 1 0 0 0-.117 1.993L6 11h6a1 1 0 0 0 .117-1.993zm-4 4H6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2" class="duoicon-primary-layer"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 4a2 2 0 0 1 2 2v4c-3.079-2.309-7.504-.419-7.964 3.402A5 5 0 0 0 15 17v3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity=".3"></svg:path>`,
})
export class DuoIconsCertificateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
