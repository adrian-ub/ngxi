import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabProfileIcon],svg[material-symbols-light-lab-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 11.5h7v-1h-7zm0-4h7v-1h-7zm10.412 12.437l-3.416-4.43q-.367-.478-.877-.742q-.51-.265-1.119-.265H5V4.616q0-.691.463-1.153T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .144-.022.285q-.022.142-.066.267M6.616 21q-.691 0-1.153-.462T5 19.385V15.5h8.5q.366 0 .674.16q.309.161.536.457l3.527 4.616q-.183.127-.397.197t-.456.07z"></svg:path>`,
})
export class MaterialSymbolsLightLabProfileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
