import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAdmissionsIcon],svg[healthicons-admissions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm15.52 5.582H17v18.817h4.52zm0-2H15v22.817h6.52v1.814a1 1 0 0 0 1.315.948l8.865-2.955a1 1 0 0 0 .684-.948V13.969a1 1 0 0 0-.684-.949l-8.865-2.955a1 1 0 0 0-1.316.95zm4.345 10.807c0 .8-.324 1.449-.724 1.449s-.725-.649-.725-1.449s.325-1.449.725-1.449s.724.649.724 1.45" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAdmissionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
