import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextEffects20FilledIcon],svg[fluent-text-effects-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.086 3.906a2.25 2.25 0 0 0-4.171 0l-3.017 7.453l-.038.095l-1.195 2.952a2.25 2.25 0 0 0 4.171 1.688l.645-1.594h3.039l.645 1.594a2.25 2.25 0 1 0 4.171-1.688l-1.194-2.952l-.04-.095zm-1.39.563l3.03 7.484l.012.032l1.208 2.984a.75.75 0 0 1-1.39.562L12.53 13H7.47l-1.025 2.531a.75.75 0 0 1-1.39-.562l1.207-2.984l.013-.032l3.03-7.484a.75.75 0 0 1 1.39 0m1.228 7.031H8.078L10 6.749z"></svg:path>`,
})
export class FluentTextEffects20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
