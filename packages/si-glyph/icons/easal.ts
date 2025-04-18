import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphEasalIcon],svg[si-glyph-easal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.957 11.062V3.107H9.98v-1h-.995V1c0-.553-.445-1-.996-1s-.905.447-.905 1v1.107h-.995v1H3.023v7.955H1.085v.875l3.064.062l-.985 2.709c-.185.52-.002 1.047.516 1.232c.519.186.957-.15 1.143-.67l1.115-3.271h1.147v3c0 .553.355 1 .905 1a.997.997 0 0 0 .996-1v-3h1.089l1.064 3.334c.185.52.646.793 1.162.607c.519-.186.702-.691.518-1.213l-.956-2.729l3.033-.062v-.874zM3.95 3.979h2.073v.938h3.894v-.938h2.132v7.084H3.95z"></svg:path>`,
})
export class SiGlyphEasalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
