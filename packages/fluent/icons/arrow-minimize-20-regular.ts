import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMinimize20RegularIcon],svg[fluent-arrow-minimize-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11h5a.5.5 0 0 1 .492.41L9 11.5v5a.5.5 0 0 1-.992.09L8 16.5v-3.794l-5.146 5.148a.5.5 0 0 1-.765-.638l.057-.07L7.292 12H3.5a.5.5 0 0 1-.492-.41L3 11.5a.5.5 0 0 1 .41-.492zh5zm14.354-8.854a.5.5 0 0 1 .057.638l-.057.07L12.706 8H16.5a.5.5 0 0 1 .492.41L17 8.5a.5.5 0 0 1-.41.492L16.5 9h-5.02l-.069-.008l-.102-.03l-.076-.04l-.055-.04l-.032-.028l-.037-.042l-.042-.062l-.03-.06l-.02-.062l-.006-.023A.5.5 0 0 1 11 8.5l.005.074l-.003-.031L11 3.5a.5.5 0 0 1 .992-.09L12 3.5v3.792l5.146-5.146a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentArrowMinimize20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
