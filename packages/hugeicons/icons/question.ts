import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuestionIcon],svg[hugeicons-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7.283c0 2.642-2.239 4.784-5 4.784q-.488 0-.967-.09c-.23-.043-.345-.064-.425-.052s-.194.072-.42.193a3.25 3.25 0 0 1-2.113.329a2.65 2.65 0 0 0 .544-1.175c.05-.265-.074-.522-.26-.71A4.66 4.66 0 0 1 12 7.283C12 4.642 14.239 2.5 17 2.5s5 2.142 5 4.783m-6.508.217h.008m2.992 0h.008m-10.998 14H4.718c-.323 0-.648-.046-.945-.173c-.966-.415-1.457-.964-1.685-1.307a.54.54 0 0 1 .03-.631c1.12-1.488 3.72-2.386 5.389-2.386c1.668 0 4.264.898 5.384 2.386c.141.187.16.436.03.631c-.229.343-.72.892-1.686 1.307a2.4 2.4 0 0 1-.945.173zm2.784-9.711a2.776 2.776 0 0 1-2.78 2.772a2.776 2.776 0 0 1-2.778-2.772a2.776 2.776 0 0 1 2.779-2.773a2.776 2.776 0 0 1 2.779 2.773" color="currentColor"></svg:path>`,
})
export class HugeiconsQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
