import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiGrinTwotoneIcon],svg[line-md-emoji-grin-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z"><svg:animate fill="freeze" attributeName="d" begin="1.25s" dur="0.2s" values="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z;M12 14c-2.5 0 -3.25 -1 -4 -1c-0.55 0 -1 0.45 -1 1c0 0.75 1.5 4 5 4c3.5 0 5 -3.25 5 -4c0 -0.55 -0.45 -1 -1 -1c-0.75 0 -1.5 1 -4 1Z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiGrinTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
