import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWindChimeIcon],svg[emojione-wind-chime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6adbc6" d="M29.2 19.3C25.8 8.8 16 9.5 16 9.5s-9.8-.7-13.1 9.8C-.5 29.8 7.2 39.5 7.2 39.5c.1.6 4.2 1.1 9.2 1.1s9.1-.5 9.2-1.1c0 0 7-9.7 3.6-20.2"></svg:path><svg:g fill="#ed4c5c"><svg:path d="M15.6 2h1v7.5h-1z"></svg:path><svg:circle cx="16.1" cy="6.6" r="1.5"></svg:circle></svg:g><svg:path fill="#6adbc6" d="M14.6 8.1h3v1.6h-3zm.1 32.5h2.9v3.6h-2.9z"></svg:path><svg:path fill="#ffc7ce" d="M15.6 10.3h1v33.9h-1z"></svg:path><svg:path fill="#fff" d="M16.3 39.7c-2.2 0-4.3-.1-5.9-.3q-1.2-.15-1.8-.3c-.3-.1-.9-.3-.9-.8s.6-.7.9-.8c.4-.1 1.1-.2 1.8-.3c1.6-.2 3.7-.3 5.9-.3s4.3.1 5.9.3q1.2.15 1.8.3c.3.1.9.3.9.8s-.6.7-.9.8c-.4.1-1.1.2-1.8.3c-1.6.2-3.7.3-5.9.3m-7.6-1.4c.3.1.9.3 2.2.4c1.5.2 3.4.3 5.4.3s3.9-.1 5.4-.3c1.3-.1 1.9-.3 2.2-.4c-.3-.1-.9-.3-2.2-.4c-1.5-.2-3.4-.3-5.4-.3s-3.9.1-5.4.3c-1.3.1-1.9.3-2.2.4"></svg:path><svg:g fill="#ed4c5c"><svg:path d="M26.6 49.5c-8.8 1.1-11-5.3-11-5.3h1s2.2 5.7 10.4 4.4z"></svg:path><svg:path d="m23.881 55.277l5.084-12.073l.553.233l-5.084 12.073z"></svg:path></svg:g><svg:path fill="#e6eff4" d="M24.4 55.5s7 6 18.8 3.9S59.7 62 59.7 62L62 48.2s-4.4-5-20.1-1.6c-9.6 2.1-12.3-3.2-12.3-3.2z"></svg:path><svg:g fill="#f46767"><svg:path d="M36.2 53.4c.5.8-.1 2-1.3 2.6s-2.5.5-2.9-.4c-.5-.8.1-2 1.3-2.6c1.1-.6 2.4-.5 2.9.4"></svg:path><svg:ellipse cx="49.8" cy="49.2" rx="3.5" ry="2.5" transform="rotate(-28.694 49.846 49.175)"></svg:ellipse></svg:g><svg:g fill="#83bf4f"><svg:ellipse cx="39.5" cy="50.5" rx="1.8" ry="1.3" transform="rotate(-28.682 39.511 50.503)"></svg:ellipse><svg:ellipse cx="44.5" cy="55.5" rx="2.5" ry="1.8" transform="rotate(-28.67 44.514 55.544)"></svg:ellipse><svg:ellipse cx="55" cy="54.5" rx="1.9" ry="1.8" transform="rotate(-28.682 54.972 54.519)"></svg:ellipse></svg:g>`,
})
export class EmojioneWindChimeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
