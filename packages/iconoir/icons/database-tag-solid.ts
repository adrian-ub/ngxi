import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDatabaseTagSolidIcon],svg[iconoir-database-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 9A6.75 6.75 0 0 1 8 2.25h8A6.75 6.75 0 0 1 22.75 9v6A6.75 6.75 0 0 1 16 21.75H8A6.75 6.75 0 0 1 1.25 15zm16.08-.096c-.25-.14-.588-.154-.973-.154H14.25v2.5h2.128c.377 0 .706-.017.952-.154c.158-.089.42-.302.42-1.096s-.262-1.007-.42-1.096M18.582 12c.423-.45.668-1.112.668-2c0-1.206-.452-1.993-1.187-2.404c-.62-.348-1.325-.346-1.67-.346H13.5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.894c.344 0 1.049.002 1.669-.346c.735-.411 1.187-1.198 1.187-2.404c0-.888-.245-1.549-.668-2m-2.203.75H14.25v2.5h2.107c.385 0 .723-.014.973-.154c.158-.089.42-.302.42-1.096s-.262-1.007-.42-1.095c-.245-.138-.575-.154-.951-.155m-8.022-4c.385 0 .723.014.973.154c.158.089.42.302.42 1.096v4c0 .794-.262 1.007-.42 1.096c-.25.14-.588.154-.973.154H6.25v-6.5zM11.25 10c0-1.206-.452-1.993-1.187-2.404c-.62-.348-1.325-.346-1.67-.346H5.5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.894c.344 0 1.049.002 1.669-.346c.735-.411 1.187-1.198 1.187-2.404z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDatabaseTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
