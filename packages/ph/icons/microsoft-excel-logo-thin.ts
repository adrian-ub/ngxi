import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoThinIcon],svg[ph-microsoft-excel-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H72a12 12 0 0 0-12 12v28H40a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h20v28a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-44 72h48v56h-48Zm48-60v52h-48V80a12 12 0 0 0-12-12h-4V36h60a4 4 0 0 1 4 4M68 40a4 4 0 0 1 4-4h60v32H68ZM36 176V80a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m32 40v-28h64v32H72a4 4 0 0 1-4-4m132 4h-60v-32h4a12 12 0 0 0 12-12v-12h48v52a4 4 0 0 1-4 4M68.93 149.44L86.79 128l-17.86-21.44a4 4 0 0 1 6.14-5.12L92 121.75l16.93-20.31a4 4 0 1 1 6.14 5.12L97.21 128l17.86 21.44a4 4 0 1 1-6.14 5.12L92 134.25l-16.93 20.31A4 4 0 0 1 72 156a3.94 3.94 0 0 1-2.56-.93a4 4 0 0 1-.51-5.63"></svg:path>`,
})
export class PhMicrosoftExcelLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
