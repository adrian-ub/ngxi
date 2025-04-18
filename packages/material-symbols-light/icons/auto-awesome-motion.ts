import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoAwesomeMotionIcon],svg[material-symbols-light-auto-awesome-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.616 21q-.691 0-1.153-.462T11 19.385v-6.77q0-.69.463-1.152T12.616 11h6.769q.69 0 1.153.463T21 12.616v6.769q0 .69-.462 1.153T19.385 21zM7 17.23V8.617q0-.691.463-1.153T8.616 7h8.615v1H8.616q-.231 0-.424.192T8 8.616v8.615zm-4-4V4.617q0-.691.463-1.153T4.615 3h8.616v1H4.616q-.231 0-.424.192T4 4.615v8.616z"></svg:path>`,
})
export class MaterialSymbolsLightAutoAwesomeMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
