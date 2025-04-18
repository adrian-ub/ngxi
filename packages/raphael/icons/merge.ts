import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelMergeIcon],svg[raphael-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.342 15.5l-7.556-4.363v2.613h-1.41c-.79-.01-1.332-.24-2.02-.743c-1.02-.745-2.094-2.18-3.55-3.568c-1.44-1.38-3.515-2.71-6.306-2.69H2.812v3.5H8.5c2.23.01 3.44 1.184 5.07 2.933c.697.753 1.428 1.58 2.324 2.323c-1.396 1.165-2.412 2.516-3.484 3.5c-1.183 1.082-2.202 1.724-3.912 1.742H2.813v3.5H8.53c3.75 0 6.034-2.32 7.618-4.066c.817-.895 1.537-1.69 2.21-2.19c.685-.503 1.23-.733 2.016-.743h1.412v2.613l7.556-4.363z"></svg:path>`,
})
export class RaphaelMergeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
