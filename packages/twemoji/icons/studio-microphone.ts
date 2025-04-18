import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiStudioMicrophoneIcon],svg[twemoji-studio-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M6 15h24v2H6zm15 15c0 2.208-.792 4-3 4s-3-1.792-3-4s.791-2 3-2s3-.208 3 2"></svg:path><svg:path fill="#66757F" d="M18 31c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3"></svg:path><svg:path fill="#99AAB5" d="M18 0a9 9 0 0 0-9 9v7h18V9a9 9 0 0 0-9-9"></svg:path><svg:g fill="#292F33"><svg:circle cx="15.5" cy="2.5" r="1.5"></svg:circle><svg:circle cx="20.5" cy="2.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="6.5" r="1.5"></svg:circle><svg:circle cx="22.5" cy="6.5" r="1.5"></svg:circle><svg:circle cx="12.5" cy="6.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="10.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="20.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="25.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="14.5" r="1.5"></svg:circle><svg:circle cx="22.5" cy="14.5" r="1.5"></svg:circle><svg:circle cx="12.5" cy="14.5" r="1.5"></svg:circle></svg:g><svg:path fill="#66757F" d="M9 15.062V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938z"></svg:path><svg:path fill="#66757F" d="M30 14a1 1 0 0 0-1 1v2c0 6.074-4.925 11-11 11S7 23.074 7 17v-2a1 1 0 0 0-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class TwemojiStudioMicrophoneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
