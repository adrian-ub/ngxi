import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAudioGlowIcon],svg[arcticons-audio-glow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.719h7.4v3.306H5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 23.025h7.4v3.306H5.5zm0 3.306h7.4v3.306H5.5zm0 3.306h7.4v3.306H5.5zm0 3.306h7.4v3.306H5.5zm7.4-6.612h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm7.4-13.224h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.7 26.331h7.4v3.306h-7.4zm0-3.306h7.4v3.306h-7.4zm0 6.612h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm7.4-13.224h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm0 3.306h7.4v3.306h-7.4zm-5.542-13.224h3.684m-11.085-1.653h3.686m11.115-1.434h3.684m-25.884 0h3.684M7.357 11.751h3.686"></svg:path>`,
})
export class ArcticonsAudioGlowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
