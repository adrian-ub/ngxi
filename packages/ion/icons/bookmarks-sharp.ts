import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBookmarksSharpIcon],svg[ion-bookmarks-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 0v48h304v368l48 32V0z"></svg:path><svg:path fill="currentColor" d="M48 80v432l168-124l168 124V80z"></svg:path>`,
})
export class IonBookmarksSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
