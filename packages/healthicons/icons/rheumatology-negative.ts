import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRheumatologyNegativeIcon],svg[healthicons-rheumatology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRheumatologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21 6h6v9.682c0 .842.342 1.649.948 2.234l.421.406a2.53 2.53 0 0 1-2.89 4.084l-.205-.102a2.85 2.85 0 0 0-2.548 0l-.206.102a2.53 2.53 0 0 1-2.89-4.084l.422-.406A3.1 3.1 0 0 0 21 15.68zM9 6h10v4.92c-5.263 2.012-9 7.11-9 13.08s3.737 11.068 9 13.08V42H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m18 36h-6v-9.682c0-.842-.342-1.649-.948-2.234l-.421-.406a2.53 2.53 0 0 1 2.89-4.085l.205.103a2.85 2.85 0 0 0 2.548 0l.206-.103a2.53 2.53 0 0 1 2.89 4.085l-.422.406A3.1 3.1 0 0 0 27 32.318zm12 0H29v-4.92c5.263-2.012 9-7.11 9-13.08s-3.737-11.068-9-13.08V6h10a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRheumatologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRheumatologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
