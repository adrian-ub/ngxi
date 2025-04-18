import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeinHaushaltsbuchIcon],svg[arcticons-mein-haushaltsbuch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.337 24c0 1.042 1.64 1.886 3.665 1.886s3.666-.844 3.666-1.886m-7.331 3.037c0 1.042 1.64 1.886 3.665 1.886s3.666-.844 3.666-1.886m-7.331 3.037c0 1.042 1.64 1.886 3.665 1.886s3.666-.844 3.666-1.886"></svg:path><svg:ellipse cx="28.334" cy="14.889" rx="3.666" ry="1.886"></svg:ellipse><svg:path d="M24.668 17.926c0 1.041 1.642 1.886 3.666 1.886S32 18.967 32 17.926m-7.332 3.037c0 1.041 1.642 1.886 3.666 1.886S32 22.004 32 20.963M24.668 24c0 1.042 1.642 1.886 3.666 1.886S32 25.042 32 24m-7.332 3.037c0 1.042 1.642 1.886 3.666 1.886S32 28.079 32 27.037m-7.332 3.037c0 1.042 1.642 1.886 3.666 1.886S32 31.116 32 30.074"></svg:path><svg:path d="M24.668 14.889V33.11c0 1.042 1.642 1.886 3.666 1.886S32 34.153 32 33.111V14.89"></svg:path><svg:ellipse cx="21.002" cy="20.755" rx="3.666" ry="1.886"></svg:ellipse><svg:path d="M17.337 20.963V33.11c0 1.042 1.64 1.886 3.665 1.886s3.666-.844 3.666-1.886V20.963M10 30.07c0 1.04 1.641 1.885 3.666 1.885s3.666-.844 3.666-1.886"></svg:path><svg:ellipse cx="13.671" cy="26.829" rx="3.666" ry="1.886"></svg:ellipse><svg:path d="M10.005 26.829v6.282c0 1.042 1.641 1.886 3.666 1.886s3.666-.844 3.666-1.886V26.83"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 21.5v-10a6 6 0 0 0-6-6h-25a6 6 0 0 0-6 6v25a6 6 0 0 0 6 6h25a6 6 0 0 0 6-6v-10"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 21.5v-10a6 6 0 0 0-6-6m0 37a6 6 0 0 0 6-6v-10"></svg:path><svg:rect width="10" height="5" x="34.5" y="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5" ry="1.5"></svg:rect>`,
})
export class ArcticonsMeinHaushaltsbuchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
