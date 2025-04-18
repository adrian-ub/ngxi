import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextEffects20RegularIcon],svg[fluent-text-effects-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.623 4.093a1.75 1.75 0 0 0-3.245 0l-3.02 7.464q-.017.037-.03.074l-1.2 2.962a1.75 1.75 0 0 0 3.245 1.314L8.144 14h3.713l.771 1.907a1.75 1.75 0 0 0 3.245-1.314l-1.2-2.962q-.014-.038-.03-.074zM10.44 10.5L10 9.414L9.561 10.5zm.256-6.031l3.029 7.484l.013.032l1.208 2.984a.75.75 0 0 1-1.39.562L12.53 13H7.47l-1.025 2.531a.75.75 0 0 1-1.39-.562l1.207-2.984l.013-.032l3.03-7.484a.75.75 0 0 1 1.39 0m1.228 7.031H8.077L10 6.749z"></svg:path>`,
})
export class FluentTextEffects20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
