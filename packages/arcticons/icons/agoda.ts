import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAgodaIcon],svg[arcticons-agoda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="c"><svg:path d="M18.993 19.322v5.822a1.947 1.947 0 0 1-1.943 1.941c-.582 0-1.068-.194-1.36-.582"></svg:path><svg:path d="M17.05 19.322c1.068 0 1.942.874 1.942 1.941v1.261c0 1.068-.874 1.941-1.942 1.941s-1.942-.873-1.942-1.94v-1.262c0-1.067.874-1.94 1.942-1.94"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.466a1.947 1.947 0 0 1-1.942-1.941v-1.261c0-1.068.874-1.941 1.942-1.941s1.942.873 1.942 1.94v1.262c0 1.067-.874 1.94-1.942 1.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.043 22.525c0 1.067-.874 1.94-1.942 1.94s-1.943-.873-1.943-1.94v-1.262c0-1.067.874-1.94 1.943-1.94s1.942.873 1.942 1.94m0 3.202v-5.143m20.849 1.941c0-1.067-.874-1.94-1.942-1.94s-1.942.873-1.942 1.94v1.262c0 1.067.874 1.94 1.942 1.94s1.942-.873 1.942-1.94m0 1.94v-7.763m6.95 5.823c0 1.067-.874 1.94-1.942 1.94s-1.943-.873-1.943-1.94v-1.262c0-1.067.874-1.94 1.943-1.94s1.942.873 1.942 1.94m0 3.202v-5.143" class="c"></svg:path><svg:circle cx="10.101" cy="30.52" r=".751" fill="currentColor"></svg:circle><svg:circle cx="17.05" cy="30.52" r=".751" fill="currentColor"></svg:circle><svg:circle cx="24" cy="30.52" r=".751" fill="currentColor"></svg:circle><svg:circle cx="30.95" cy="30.52" r=".751" fill="currentColor"></svg:circle><svg:circle cx="37.9" cy="30.548" r=".751" fill="currentColor"></svg:circle>`,
})
export class ArcticonsAgodaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
