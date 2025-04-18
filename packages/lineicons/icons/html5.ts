import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHtml5Icon],svg[lineicons-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.233 2h.902v.89h.824V2h.902v2.697h-.902v-.903h-.824v.903h-.902zm3.813.894h-.793V2h2.489v.894h-.794v1.803h-.902zM12.136 2h.94l.579.948l.578-.948h.94v2.697h-.898V3.36l-.62.96h-.015l-.621-.96v1.337h-.882zm3.486 0h.901v1.806h1.268v.891h-2.17z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m4.915 5.93l1.29 14.464L11.99 22l5.802-1.609l1.291-14.46zm11.202 6.547H9.652l-.162-1.816h6.788l.159-1.774H7.552l.478 5.364h6.148l-.206 2.3l-1.978.535h-.002l-1.976-.533l-.126-1.415H8.11l.248 2.785l3.633 1.009l.009-.002l3.63-1.007l.443-4.97z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
