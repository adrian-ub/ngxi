import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPapertagIcon],svg[arcticons-papertag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.815 7.493a1.085 1.085 0 0 0-1.057.955l-.587 5.605H6.454a.953.953 0 0 0-.954.955v5.345a.953.953 0 0 0 .954.955h4.958l-.564 5.383H6.454a.953.953 0 0 0-.954.956v5.345a.953.953 0 0 0 .954.955h3.635L9.5 39.552a.845.845 0 0 0 .86.955h6.679a1.09 1.09 0 0 0 1.06-.955l.588-5.605h8.542l-.587 5.605a.845.845 0 0 0 .86.955h6.681a1.085 1.085 0 0 0 1.058-.955l.587-5.605h5.717a.953.953 0 0 0 .954-.955v-5.345a.953.953 0 0 0-.954-.955h-4.958l.564-5.384h4.394a.953.953 0 0 0 .954-.955v-5.345a.953.953 0 0 0-.954-.955H37.91l.588-5.605a.845.845 0 0 0-.86-.955H30.96a1.09 1.09 0 0 0-1.06.955l-.588 5.605H20.77l.588-5.605a.845.845 0 0 0-.86-.955Zm6.196 13.816h8.542l-.564 5.382h-8.542Z"></svg:path>`,
})
export class ArcticonsPapertagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
