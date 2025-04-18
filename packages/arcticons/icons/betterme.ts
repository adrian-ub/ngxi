import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBettermeIcon],svg[arcticons-betterme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.546 30.354V17.632l6.25 12.736l6.25-12.717v12.717m7.999-1.607a3.12 3.12 0 0 1-2.715 1.607c-1.726 0-3.125-1.426-3.125-3.184v-2.07c0-1.758 1.399-3.184 3.125-3.184s3.125 1.426 3.125 3.184v1.035h-6.25"></svg:path>`,
})
export class ArcticonsBettermeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
