import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnStartEventMultipleIcon],svg[bpmn-start-event-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 99c-363.757-4.934-714.249 229.17-852.226 565.192c-144.118 330.153-69.236 740.283 182.862 997.771c242.464 260.992 641.95 356.786 976.52 234.67c346.74-118.073 602.724-458.592 616.639-825.09c23.34-360.131-188.536-719.422-512.954-876.293C1307.807 131.856 1165.95 98.797 1024 99m0 100c359.283-6.249 700.984 251.836 793.747 598.93c97.03 326.908-34.215 705.405-315.907 899.024C1209.227 1912.03 775.3 1896.47 498.977 1660.8c-278.414-221.98-378.073-632.576-235.228-958.182C387.557 401.605 698.338 195.179 1024 199m0 365.953Q803.508 725.015 583.018 885.08l168.439 517.967h545.082l168.44-517.967l-440.977-320.127zm0 61.777l382.178 277.44l-145.977 448.904H787.803q-72.991-224.453-145.979-448.904l382.174-277.44z"></svg:path>`,
})
export class BpmnStartEventMultipleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
