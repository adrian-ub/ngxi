import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoFillIcon],svg[ph-microsoft-excel-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M72 160a8 8 0 0 1-6.15-13.12L81.59 128l-15.74-18.88a8 8 0 0 1 12.3-10.24L92 115.5l13.85-16.62a8 8 0 1 1 12.3 10.24L102.41 128l15.74 18.88a8 8 0 0 1-12.3 10.24L92 140.5l-13.85 16.62A8 8 0 0 1 72 160m56 56H72v-24h56Zm0-152H72V40h56Zm72 152h-56v-24a16 16 0 0 0 16-16v-8h40Zm0-64h-40v-48h40Zm0-64h-40v-8a16 16 0 0 0-16-16V40h56Z"></svg:path>`,
})
export class PhMicrosoftExcelLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
