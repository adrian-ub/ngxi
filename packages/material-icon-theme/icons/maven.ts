import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMavenIcon],svg[material-icon-theme-maven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeMaven0" x1=".125" x2="0" y1="1" y2="0"><svg:stop offset="0%" stop-color="#ab47bc"></svg:stop><svg:stop offset="37.5%" stop-color="#ab47bc"></svg:stop><svg:stop offset="37.501%" stop-color="#d32f2f"></svg:stop><svg:stop offset="54.25%" stop-color="#d32f2f"></svg:stop><svg:stop offset="54.251%" stop-color="#ff7043"></svg:stop><svg:stop offset="69.75%" stop-color="#ff7043"></svg:stop><svg:stop offset="69.751%" stop-color="#ffa726"></svg:stop><svg:stop offset="100%" stop-color="#ffa726"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#materialIconThemeMaven0)" d="M22 2s-7.64-.37-13.66 7.88C3.72 16.21 2 22 2 22l1.94-1c1.44-2.5 2.19-3.53 3.6-5c2.53.74 5.17.65 7.46-2c-2-.56-3.6-.43-5.96-.19C11.69 12 13.5 11.6 16 12l1-2c-1.8-.34-3-.37-4.78.04C14.19 8.65 15.56 7.87 18 8l1.11-1.73c-1.53-.06-2.4-.02-4.19.3c1.61-1.46 3.08-2.12 5.22-2.25c0 0 1.05-1.89 1.86-2.32"></svg:path>`,
})
export class MaterialIconThemeMavenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
