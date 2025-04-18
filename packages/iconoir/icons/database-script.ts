import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseScriptIcon],svg[iconoir-database-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 14V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7"></svg:path><svg:path d="M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"></svg:path></svg:g>`,
})
export class IconoirDatabaseScriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
