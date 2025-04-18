import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiMovieCameraIcon],svg[arcticons-emoji-movie-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.492 31.817v4.879c0 .682.57 1.235 1.274 1.235H33.72V26.41H15.492v2.769"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.286 25.972L5.5 31.144l3.426-.531l9.283 1.702q-.02.28.02.568a2.804 2.804 0 1 0 1.59-2.914L9.395 28.057zm27.434 8.515l8.78 2.271v-9.44l-8.78 2.088m-8.15-12.504a6.83 6.83 0 1 0 13.658.008v-.008a6.83 6.83 0 1 0-13.658-.005z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.35 16.902a2.049 2.049 0 1 0 4.098.002v-.002a2.049 2.049 0 1 0-4.097-.003zm-21.098 0a6.83 6.83 0 1 0 13.658.004v-.004a6.83 6.83 0 1 0-13.658 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.032 16.902a2.049 2.049 0 1 0 4.098 0v0a2.049 2.049 0 1 0-4.098 0"></svg:path>`,
})
export class ArcticonsEmojiMovieCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
