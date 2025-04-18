import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeBuildingColumnsIcon],svg[prime-building-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.121 4.925a.25.25 0 0 0-.242 0l-8.515 4.73a.75.75 0 0 1-.728-1.31l8.514-4.73a1.75 1.75 0 0 1 1.7 0l8.514 4.73a.75.75 0 1 1-.728 1.31zM9.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9M6 11.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M4.25 20a.75.75 0 0 1 .75-.75h14a.75.75 0 1 1 0 1.5H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class PrimeBuildingColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
