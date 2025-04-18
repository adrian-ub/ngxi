import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageAltText24RegularIcon],svg[fluent-image-alt-text-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm.5 5h1.5v6.75q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116l5.822 5.702q.102-.28.104-.595V7.25a1.75 1.75 0 0 0-1.75-1.75H13V4h5.75A3.25 3.25 0 0 1 22 7.25v11.5A3.25 3.25 0 0 1 18.75 22H7.25A3.25 3.25 0 0 1 4 18.75zm15.33 8.401l-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07l-5.807 5.687q.274.097.582.099h11.5c.203 0 .399-.035.58-.099M16.253 7.5a2.252 2.252 0 1 1 0 4.504a2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504a.752.752 0 0 0 0-1.504"></svg:path>`,
})
export class FluentImageAltText24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
