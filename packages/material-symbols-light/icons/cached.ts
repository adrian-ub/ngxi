import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCachedIcon],svg[material-symbols-light-cached-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 19.5q-3.139 0-5.344-2.19T4.5 12v-1.386l-2.1 2.1l-.708-.708L5 8.698l3.308 3.308l-.708.708l-2.1-2.1V12q0 2.712 1.907 4.606T12.05 18.5q.592 0 1.208-.121q.615-.121 1.196-.364l.75.75q-.738.358-1.537.546t-1.617.189M19 15.302l-3.308-3.308l.708-.707l2.1 2.1V12q0-2.711-1.907-4.606T11.95 5.5q-.592 0-1.208.121q-.615.121-1.196.363l-.75-.75q.739-.357 1.537-.546q.798-.188 1.617-.188q3.139 0 5.344 2.19T19.5 12v1.387l2.1-2.1l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightCachedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
