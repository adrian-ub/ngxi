import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAdmissionsNegativeIcon],svg[healthicons-admissions-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsAdmissionsNegative0)" clip-rule="evenodd"><svg:path d="M22.835 10.065a1 1 0 0 0-1.316.95v1.567H15v22.817h6.52v1.814a1 1 0 0 0 1.315.948l8.865-2.955a1 1 0 0 0 .684-.948V13.969a1 1 0 0 0-.684-.949zm3.03 13.324c0 .8-.324 1.449-.724 1.449s-.725-.649-.725-1.449s.325-1.449.725-1.449s.724.649.724 1.45m-4.346-8.807H17V33.4h4.52z"></svg:path><svg:path d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAdmissionsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAdmissionsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
