import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifiCallingOutlineSharpIcon],svg[material-symbols-light-wifi-calling-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.2 20q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q4 7.469 4 4.8V4h4.439l.848 4.083l-2.696 2.51q.684 1.186 1.417 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V20zM6.121 9.654l2.092-1.92L7.635 5h-2.63q.03 1.144.309 2.305q.278 1.16.807 2.349m8.45 8.335q.923.463 2.09.723t2.339.277v-2.605l-2.388-.475zM16.5 9.962l-4.467-4.473q1.019-.758 2.175-1.162t2.292-.404q1.13 0 2.284.407t2.178 1.17zm0-1.427l2.821-2.816q-.758-.417-1.445-.606t-1.376-.19q-.694 0-1.382.19t-1.445.6zm0 0"></svg:path>`,
})
export class MaterialSymbolsLightWifiCallingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
