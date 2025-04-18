import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewCompactIcon],svg[material-symbols-light-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.039 18.904V5.096zM2.961 9.173V5.096H6.98v4.077zm4.788 0V5.096h3.866v4.077zm4.635 0V5.096h3.865v4.077zm4.634 0V5.096h4.02v4.077zm0 4.885V9.942h4.02v4.116zm-4.634 0V9.942h3.865v4.116zm-4.635 0V9.942h3.866v4.116zm-4.789 0V9.942h4.02v4.116zm14.058 4.846v-4.077h4.02v4.077zm-4.634 0v-4.077h3.865v4.077zm-4.635 0v-4.077h3.866v4.077zm-4.789 0v-4.077h4.02v4.077z"></svg:path>`,
})
export class MaterialSymbolsLightViewCompactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
