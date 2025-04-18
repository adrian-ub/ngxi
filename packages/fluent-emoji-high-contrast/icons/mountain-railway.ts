import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMountainRailwayIcon],svg[fluent-emoji-high-contrast-mountain-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.5 24a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path><svg:path d="M30 30H2v-9.133a1 1 0 0 1 .237-.647l12.41-14.625a2 2 0 0 1 2.886-.172l2.445 2.27l4.045-4.903a2 2 0 0 1 3.03-.065l-.744.669a1 1 0 0 0-1.515.032l-4.082 4.95l1.754 1.628H29v-3.62l-2.69-2.99l.742-.67L30 6zm-19-3a1 1 0 0 0 1 1a2 2 0 0 0 3.732 1H15a1 1 0 0 1-1-1h6a1 1 0 0 1-1 1h-.732A2 2 0 0 0 22 28h6a2 2 0 0 0 1 1.732V23H11zm18-13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm0-1v-2H12a1 1 0 0 0-1 1v1zm-18 9h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2zm6-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm5 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastMountainRailwayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
