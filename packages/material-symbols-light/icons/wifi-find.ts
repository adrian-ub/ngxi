import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifiFindIcon],svg[material-symbols-light-wifi-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.577L1.423 8.994q2.19-1.96 4.917-2.977T12 5t5.67 1.017t4.907 2.977l-1.74 1.785q-.654-.775-1.611-1.277T17 9q-2.077 0-3.538 1.462T12 14q0 1.244.505 2.216q.504.972 1.249 1.582zm9.389-.558l-2.614-2.607q-.354.275-.815.431Q17.498 17 17 17q-1.258 0-2.129-.871T14 14t.871-2.129T17 11t2.129.871T20 14q0 .46-.137.902q-.138.442-.374.796l2.607 2.613zM17 16q.83 0 1.416-.584Q19 14.83 19 14t-.584-1.415T17 12t-1.415.585T15 14t.585 1.416T17 16"></svg:path>`,
})
export class MaterialSymbolsLightWifiFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
