import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilLightningAltSolidIcon],svg[basil-lightning-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.82 3a.5.5 0 0 0-.847-.36l-1.778 1.71a35.6 35.6 0 0 0-6.63 8.715a.5.5 0 0 0 .435.746h4.31V21a.5.5 0 0 0 .837.37l.795-.725a35.5 35.5 0 0 0 7.001-8.78l.492-.87a.5.5 0 0 0-.435-.747h-4.18z"></svg:path>`,
})
export class BasilLightningAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
