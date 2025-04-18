import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncientIcon],svg[tdesign-city-ancient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.146 1.483l.856-1.417l.857 1.419l.005.01l.024.039l.097.154a36 36 0 0 0 1.59 2.333c.49.66 1.024 1.32 1.54 1.852c.544.559.97.87 1.233.967c.337.125.554.16.652.16h1v2h-1v2h4v2h-1v9H3v-9H2v-2h4.002V9H5V7h1c.098 0 .316-.035.654-.16c.264-.099.69-.41 1.233-.968A19 19 0 0 0 9.43 4.02a36 36 0 0 0 1.686-2.487l.024-.04l.005-.01zM8.002 9v2H16V9zm6.427-2a22 22 0 0 1-1.46-1.785c-.361-.486-.691-.96-.968-1.37c-.276.41-.606.883-.967 1.369A22 22 0 0 1 9.573 7zM5 13v7h3v-5h8v5h3v-7zm9 7v-3h-4v3z"></svg:path>`,
})
export class TdesignCityAncientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
