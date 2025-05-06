import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarShopBoldIcon],svg[solar-shop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.778 3.655c-.181.36-.27.806-.448 1.696l-.598 2.99a3.06 3.06 0 1 0 6.043.904l.07-.69a3.167 3.167 0 1 0 6.307-.038l.073.728a3.06 3.06 0 1 0 6.043-.904l-.598-2.99c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548M18.269 13.5a4.53 4.53 0 0 0 2.231-.581V14c0 3.771 0 5.657-1.172 6.828c-.943.944-2.348 1.127-4.828 1.163V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491c-2.48-.036-3.885-.22-4.828-1.163C3.5 19.657 3.5 17.771 3.5 14v-1.081a4.53 4.53 0 0 0 2.232.581a4.55 4.55 0 0 0 3.112-1.228A4.64 4.64 0 0 0 12 13.5a4.64 4.64 0 0 0 3.156-1.228a4.55 4.55 0 0 0 3.112 1.228"></svg:path>`,
})
export class SolarShopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopBoldDuotoneIcon],svg[solar-shop-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12m8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"></svg:path><svg:path fill="currentColor" d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z" opacity=".7"></svg:path>`,
})
export class SolarShopBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopBrokenIcon],svg[solar-shop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172M20.5 11v3c0 1.17 0 2.158-.035 3"></svg:path><svg:path d="M9.5 2h5m-5 0l-.652 6.517a3.167 3.167 0 1 0 6.304 0L14.5 2m-5 0H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548M9.5 2l-.725 7.245a3.06 3.06 0 1 1-6.043-.904L2.8 8m11.7-6h2.082c.908 0 1.362 0 1.752.107a3 3 0 0 1 1.888 1.548c.181.36.27.806.448 1.696l.598 2.99a3.06 3.06 0 1 1-6.043.904zm-5 19.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"></svg:path></svg:g>`,
})
export class SolarShopBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopLineDuotoneIcon],svg[solar-shop-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M9.5 2h5l.652 6.517a3.168 3.168 0 1 1-6.304 0z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"></svg:path><svg:path fill="currentColor" d="M8.75 21.5a.75.75 0 0 0 1.5 0zm5 0a.75.75 0 0 0 1.5 0zm0-5.299l.375-.65zm.549.549l-.65.375zm-4.598 0l.65.375zm.549-.549l.375.65zm2.25 5.049h-1v1.5h1zM4.25 14v-3h-1.5v3zm15.5-3v3h1.5v-3zM11.5 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM2.75 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zm9.75 8.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.028.138-2.382.14-4.289.14zM19.75 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-9.5 7.5v-3h-1.5v3zm3.5-3v3h1.5v-3zM12 16.75c.481 0 .792 0 1.027.022c.225.02.307.055.348.079l.75-1.3c-.307-.177-.633-.243-.962-.273c-.32-.029-.71-.028-1.163-.028zm3.25 1.75c0-.453 0-.844-.028-1.163c-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.059.123.079.348c.021.235.022.546.022 1.027zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.25 2.25 0 0 0-.824-.824zM10.25 18.5c0-.481 0-.792.022-1.027c.02-.225.055-.307.079-.348l-1.3-.75c-.177.307-.243.633-.273.962c-.029.32-.028.71-.028 1.163zM12 15.25c-.453 0-.844 0-1.163.028c-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.058.348-.079c.235-.021.546-.022 1.027-.022zm-1.65 1.875a.75.75 0 0 1 .275-.274l-.75-1.3a2.25 2.25 0 0 0-.824.824z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarShopLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopLinearIcon],svg[solar-shop-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172S20.5 17.771 20.5 14v-3"></svg:path><svg:path d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"></svg:path><svg:path d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"></svg:path><svg:path stroke-linecap="round" d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"></svg:path></svg:g>`,
})
export class SolarShopLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticBoldIcon],svg[solar-shop-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14.25a.75.75 0 0 1 .75.75v6.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0v6.25h12.5V15a.75.75 0 0 1 .75-.75M16.528 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2"></svg:path>`,
})
export class SolarShopMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticBoldDuotoneIcon],svg[solar-shop-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14.25a.75.75 0 0 1 .75.75v6.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0v6.25h12.5V15a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2"></svg:path>`,
})
export class SolarShopMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticBrokenIcon],svg[solar-shop-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 22H11m-8 0h4m12 0v-7M5 22v-7"></svg:path><svg:path stroke-linejoin="round" d="M12 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2H16"></svg:path></svg:g>`,
})
export class SolarShopMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticLineDuotoneIcon],svg[solar-shop-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 22H3"></svg:path><svg:path stroke-linecap="round" d="M19 22v-7M5 22v-7" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z"></svg:path></svg:g>`,
})
export class SolarShopMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticLinearIcon],svg[solar-shop-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 22H3m16 0v-7M5 22v-7"></svg:path><svg:path stroke-linejoin="round" d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z"></svg:path></svg:g>`,
})
export class SolarShopMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticOutlineIcon],svg[solar-shop-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.435 1.25c-.57 0-1.053 0-1.453.041c-.426.044-.82.14-1.191.37s-.634.539-.864.9c-.215.34-.432.772-.687 1.282l-.016.033l-.027.06l-1.403 3.547c-.167.423-.352.95-.407 1.488c-.055.552.021 1.183.453 1.73A2.75 2.75 0 0 0 4 11.75c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863c.877 0 1.658-.411 2.16-1.048c.432-.548.508-1.18.453-1.73c-.054-.54-.24-1.066-.406-1.489l-1.404-3.548l-.027-.06l-.016-.032c-.255-.51-.471-.943-.687-1.282c-.23-.361-.491-.67-.863-.9s-.765-.326-1.191-.37c-.4-.041-.884-.041-1.454-.041zm.565 9c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a1.25 1.25 0 0 1-2.232.773c-.114-.144-.17-.342-.138-.652c.032-.322.151-.688.308-1.086L4.58 4.517c.268-.535.447-.89.613-1.15c.16-.252.275-.361.386-.43c.112-.07.26-.123.557-.154c.314-.032.72-.033 1.336-.033h9.056c.617 0 1.023 0 1.336.033c.297.031.446.085.557.154s.226.178.386.43c.167.26.346.615.613 1.15l1.392 3.518c.157.398.276.764.308 1.086c.032.31-.024.508-.137.652A1.25 1.25 0 0 1 18.75 9a.75.75 0 1 0-1.5 0a1.25 1.25 0 1 1-2.5 0a.75.75 0 1 0-1.5 0a1.25 1.25 0 1 1-2.5 0a.75.75 0 1 0-1.5 0c0 .69-.56 1.25-1.25 1.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.75 15a.75.75 0 0 0-1.5 0v6.25H5.75V15a.75.75 0 0 0-1.5 0v6.25H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5h-1.25z"></svg:path>`,
})
export class SolarShopMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopOutlineIcon],svg[solar-shop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.748.748 1.697 1.08 2.87 1.238c1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.01.812a16 16 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273c-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028c-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.757a16 16 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.139-1.027-.14-2.382-.14-4.289v-1.548a3.81 3.81 0 0 0 4.588-1.306A3.9 3.9 0 0 0 12 12.75a3.9 3.9 0 0 0 3.162-1.604a3.8 3.8 0 0 0 3.106 1.604m-8.018 8.498q.582.002 1.25.002h1q.668 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A13 13 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027zM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686l.004-.042zm.921 5.875l.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033m8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161" clip-rule="evenodd"></svg:path>`,
})
export class SolarShopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleBoldIcon],svg[solar-shuffle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m4.262-14.523a.75.75 0 0 1 1.06-.015l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.146-.954h-.338c-.511 0-.844 0-1.1.025c-.242.023-.36.062-.444.109c-.084.046-.176.12-.318.307c-.152.2-.323.474-.586.902l-1.52 2.463c-.242.39-.45.729-.652.994c-.218.286-.46.532-.789.713c-.328.18-.666.254-1.025.288c-.336.032-.74.032-1.21.032H6a.75.75 0 0 1 0-1.5h2.162c.511 0 .844 0 1.1-.025c.243-.023.36-.062.444-.11c.084-.045.176-.12.318-.306c.152-.2.323-.475.586-.902l1.52-2.464c.242-.39.45-.728.652-.994c.218-.285.46-.531.789-.712c.328-.18.666-.255 1.025-.289c.336-.031.74-.031 1.21-.031h.37a.75.75 0 0 1 .086-.94M9.385 9.77c-.085-.017-.185-.02-.584-.02H6a.75.75 0 0 1 0-1.5h2.858c.313 0 .565 0 .806.045a2.56 2.56 0 0 1 1.405.775c.167.18.299.394.459.653l.03.05a.75.75 0 1 1-1.276.788c-.206-.334-.259-.413-.313-.472a1.06 1.06 0 0 0-.584-.32m3.301 3.26a.75.75 0 0 1 1.032.244c.206.333.259.412.313.471c.151.163.355.277.584.32c.085.016.186.02.584.02h.977a.75.75 0 0 1 1.147-.955l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.147-.955h-1.034c-.313 0-.565 0-.806-.045a2.56 2.56 0 0 1-1.405-.775c-.167-.18-.299-.394-.459-.653l-.03-.05a.75.75 0 0 1 .244-1.032" clip-rule="evenodd"></svg:path>`,
})
export class SolarShuffleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleBoldDuotoneIcon],svg[solar-shuffle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.262 7.477a.75.75 0 0 1 1.06-.015l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.146-.954h-.338c-.511 0-.844 0-1.1.025c-.242.023-.36.062-.444.109c-.084.046-.176.12-.318.307c-.152.2-.323.474-.586.902l-1.52 2.463c-.242.39-.45.729-.652.994c-.218.286-.46.532-.789.713c-.328.18-.666.254-1.025.288c-.336.032-.74.032-1.21.032H6a.75.75 0 0 1 0-1.5h2.162c.511 0 .844 0 1.1-.025c.243-.023.36-.062.444-.11c.084-.045.176-.12.318-.306c.152-.2.323-.475.586-.902l1.52-2.464c.242-.39.45-.728.652-.994c.218-.285.46-.531.789-.712c.328-.18.666-.255 1.025-.289c.336-.031.74-.031 1.21-.031h.37a.75.75 0 0 1 .086-.94"></svg:path><svg:path fill="currentColor" d="M9.385 9.77c-.085-.017-.186-.02-.584-.02H6a.75.75 0 0 1 0-1.5h2.858c.313 0 .565 0 .806.045a2.56 2.56 0 0 1 1.405.775c.167.18.299.394.459.653l.03.05a.75.75 0 1 1-1.276.788c-.206-.334-.259-.413-.313-.472a1.06 1.06 0 0 0-.584-.32m3.301 3.259a.75.75 0 0 1 1.032.245c.206.333.259.412.313.471c.151.163.355.277.584.32c.085.016.186.02.584.02h.977a.75.75 0 0 1 1.147-.955l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.147-.955h-1.034c-.313 0-.565 0-.806-.045a2.56 2.56 0 0 1-1.405-.775c-.167-.18-.299-.394-.459-.653l-.03-.05a.75.75 0 0 1 .244-1.032"></svg:path>`,
})
export class SolarShuffleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleBrokenIcon],svg[solar-shuffle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5zm3.603 1.5a.75.75 0 0 0 0-1.5zm5.145-3.663l-.643-.386zm2.504-4.174l.643.386zM22 7l.53.53a.75.75 0 0 0 0-1.06zm-2.53 1.47a.75.75 0 0 0 1.06 1.06zm1.06-4a.75.75 0 1 0-1.06 1.06zm-5.31 2.92l-.369-.653zm-6.5 8.338a.75.75 0 1 0 1.024 1.096zM2 17.75h3.603v-1.5H2zm9.39-3.277l2.505-4.174l-1.286-.772l-2.504 4.174zm7.007-6.723H22v-1.5h-3.603zm3.073-1.28l-2 2l1.06 1.06l2-2zm1.06 0l-2-2l-1.06 1.06l2 2zm-8.635 3.829c.434-.724.734-1.22 1.006-1.589c.263-.355.468-.543.689-.668l-.739-1.305c-.467.264-.82.627-1.155 1.08c-.326.44-.668 1.011-1.087 1.71zm4.502-4.049c-.815 0-1.48 0-2.025.052c-.562.055-1.054.17-1.521.435l.739 1.305c.22-.125.487-.204.927-.247c.456-.044 1.036-.045 1.88-.045zm-8.292 7.451c-.677 1.128-1.02 1.686-1.385 2.027l1.024 1.096c.557-.52 1.02-1.306 1.647-2.351zM2 6.25a.75.75 0 0 0 0 1.5zM22 17l.53.53a.75.75 0 0 0 0-1.06zm-1.47-2.53a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zm-3.345-1.525l.144-.736zm-1.682-2.33a.75.75 0 1 0-1.286.77zm.025 1.391l.558-.501zm-6.593-8.95l.143-.737zm1.682 2.33a.75.75 0 0 0 1.286-.772zm-.025-1.393l-.558.502zM2 7.75h4.668v-1.5H2zm15.332 10H22v-1.5h-4.668zm5.198-1.28l-2-2l-1.06 1.06l2 2zm-1.06 0l-2 2l1.06 1.06l2-2zm-4.138-.22c-.645 0-.867-.003-1.063-.041l-.287 1.472c.372.072.765.069 1.35.069zm-4.175-.864c.3.502.5.84.754 1.122l1.115-1.003c-.134-.149-.25-.337-.583-.89zm3.112.823a2.25 2.25 0 0 1-1.243-.704l-1.115 1.003a3.75 3.75 0 0 0 2.071 1.173zM6.668 7.75c.645 0 .867.003 1.063.041l.287-1.472c-.372-.072-.765-.069-1.35-.069zm4.175.864c-.3-.502-.5-.84-.754-1.122L8.974 8.495c.134.149.25.337.583.89zm-3.112-.823c.48.094.916.34 1.243.704l1.115-1.003a3.75 3.75 0 0 0-2.071-1.173z"></svg:path>`,
})
export class SolarShuffleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleLineDuotoneIcon],svg[solar-shuffle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5zm8.748-2.163l-.643-.386zm2.504-4.174l.643.386zM22 7l.53.53a.75.75 0 0 0 0-1.06zm-2.53 1.47a.75.75 0 0 0 1.06 1.06zm1.06-4a.75.75 0 1 0-1.06 1.06zm-5.31 2.92l-.369-.653zM2 17.75h3.603v-1.5H2zm9.39-3.277l2.505-4.174l-1.286-.772l-2.504 4.174zm7.007-6.723H22v-1.5h-3.603zm3.073-1.28l-2 2l1.06 1.06l2-2zm1.06 0l-2-2l-1.06 1.06l2 2zm-8.635 3.829c.434-.724.734-1.22 1.006-1.589c.263-.355.468-.543.689-.668l-.739-1.305c-.467.264-.82.627-1.155 1.08c-.326.44-.668 1.011-1.087 1.71zm4.502-4.049c-.815 0-1.48 0-2.025.052c-.562.055-1.054.17-1.521.435l.739 1.305c.22-.125.487-.204.927-.247c.456-.044 1.036-.045 1.88-.045zM5.603 17.75c.815 0 1.48 0 2.025-.052c.562-.055 1.054-.17 1.521-.435l-.739-1.305c-.22.125-.487.204-.927.247c-.456.044-1.036.045-1.88.045zm4.502-4.049c-.435.724-.734 1.22-1.006 1.589c-.263.355-.468.543-.689.668l.74 1.305c.466-.264.819-.627 1.154-1.08c.326-.44.668-1.011 1.087-1.71z"></svg:path><svg:path fill="currentColor" d="M2 7.75a.75.75 0 0 1 0-1.5zm8.748 2.163l-.643.386zm2.504 4.174l.643-.386zM22 17l.53-.53a.75.75 0 0 1 0 1.06zm-2.53-1.47a.75.75 0 1 1 1.06-1.06zm1.06 4a.75.75 0 1 1-1.06-1.06zm-5.31-2.92l-.369.653zM2 6.25h3.603v1.5H2zm9.39 3.277l2.505 4.174l-1.286.772l-2.504-4.174zm7.007 6.723H22v1.5h-3.603zm3.073 1.28l-2-2l1.06-1.06l2 2zm1.06 0l-2 2l-1.06-1.06l2-2zm-8.635-3.829c.434.724.734 1.22 1.006 1.589c.263.355.468.543.689.668l-.739 1.305c-.467-.264-.82-.627-1.155-1.08c-.326-.44-.668-1.011-1.087-1.71zm4.502 4.049c-.815 0-1.48 0-2.025-.052c-.562-.055-1.054-.17-1.521-.435l.739-1.305c.22.125.487.204.927.247c.456.044 1.036.045 1.88.045zM5.603 6.25c.815 0 1.48 0 2.025.052c.562.055 1.054.17 1.521.435L8.41 8.042c-.22-.125-.487-.204-.927-.247c-.456-.044-1.036-.045-1.88-.045zm4.502 4.049c-.435-.724-.734-1.22-1.006-1.589c-.263-.355-.468-.543-.689-.668l.74-1.305c.466.264.819.627 1.154 1.08c.326.44.668 1.011 1.087 1.71z" opacity=".5"></svg:path>`,
})
export class SolarShuffleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleLinearIcon],svg[solar-shuffle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5zm8.748-2.163l-.643-.386zm2.504-4.174l.643.386zM22 7l.53.53a.75.75 0 0 0 0-1.06zm-2.53 1.47a.75.75 0 0 0 1.06 1.06zm1.06-4a.75.75 0 1 0-1.06 1.06zm-5.31 2.92l-.369-.653zM2 17.75h3.603v-1.5H2zm9.39-3.277l2.505-4.174l-1.286-.772l-2.504 4.174zm7.007-6.723H22v-1.5h-3.603zm3.073-1.28l-2 2l1.06 1.06l2-2zm1.06 0l-2-2l-1.06 1.06l2 2zm-8.635 3.829c.434-.724.734-1.22 1.006-1.589c.263-.355.468-.543.689-.668l-.739-1.305c-.467.264-.82.627-1.155 1.08c-.326.44-.668 1.011-1.087 1.71zm4.502-4.049c-.815 0-1.48 0-2.025.052c-.562.055-1.054.17-1.521.435l.739 1.305c.22-.125.487-.204.927-.247c.456-.044 1.036-.045 1.88-.045zM5.603 17.75c.815 0 1.48 0 2.025-.052c.562-.055 1.054-.17 1.521-.435l-.739-1.305c-.22.125-.487.204-.927.247c-.456.044-1.036.045-1.88.045zm4.502-4.049c-.435.724-.734 1.22-1.006 1.589c-.263.355-.468.543-.689.668l.74 1.305c.466-.264.819-.627 1.154-1.08c.326-.44.668-1.011 1.087-1.71zM2 6.25a.75.75 0 0 0 0 1.5zM22 17l.53.53a.75.75 0 0 0 0-1.06zm-1.47-2.53a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zm-3.345-1.525l.144-.736zm-1.682-2.33a.75.75 0 1 0-1.286.77zm.025 1.391l.558-.501zm-6.593-8.95l.143-.737zm1.682 2.33a.75.75 0 0 0 1.286-.772zm-.025-1.393l-.558.502zM2 7.75h4.668v-1.5H2zm15.332 10H22v-1.5h-4.668zm5.198-1.28l-2-2l-1.06 1.06l2 2zm-1.06 0l-2 2l1.06 1.06l2-2zm-4.138-.22c-.645 0-.867-.003-1.063-.041l-.287 1.472c.372.072.765.069 1.35.069zm-4.175-.864c.3.502.5.84.754 1.122l1.115-1.003c-.134-.149-.25-.337-.583-.89zm3.112.823a2.25 2.25 0 0 1-1.243-.704l-1.115 1.003a3.75 3.75 0 0 0 2.071 1.173zM6.668 7.75c.645 0 .867.003 1.063.041l.287-1.472c-.372-.072-.765-.069-1.35-.069zm4.175.864c-.3-.502-.5-.84-.754-1.122L8.974 8.495c.134.149.25.337.583.89zm-3.112-.823c.48.094.916.34 1.243.704l1.115-1.003a3.75 3.75 0 0 0-2.071-1.173z"></svg:path>`,
})
export class SolarShuffleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleOutlineIcon],svg[solar-shuffle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.47 4.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-1.793c-.844 0-1.424 0-1.88.045c-.44.043-.706.122-.927.247c-.22.125-.426.313-.689.668c-.272.368-.572.865-1.006 1.589l-2.523 4.205c-.41.685-.747 1.245-1.068 1.679c-.335.453-.688.816-1.155 1.08s-.96.38-1.52.435c-.538.052-1.191.052-1.99.052H2a.75.75 0 0 1 0-1.5h3.603c.844 0 1.424 0 1.88-.045c.44-.043.706-.122.927-.247c.22-.125.426-.313.689-.668c.272-.368.571-.865 1.006-1.589l2.523-4.205c.41-.685.747-1.245 1.068-1.679c.335-.453.688-.816 1.155-1.08s.96-.38 1.52-.435c.538-.052 1.191-.052 1.99-.052h1.828l-.72-.72a.75.75 0 0 1 0-1.06M7.73 7.79c-.196-.038-.418-.041-1.063-.041H2a.75.75 0 0 1 0-1.5h4.74c.546 0 .922 0 1.278.07a3.75 3.75 0 0 1 2.071 1.172c.243.27.436.592.717 1.06l.037.062a.75.75 0 1 1-1.286.772c-.332-.554-.45-.742-.583-.89a2.25 2.25 0 0 0-1.243-.705m5.683 6.566a.75.75 0 0 1 1.03.257c.331.554.448.742.582.89c.327.364.763.611 1.243.705c.196.038.418.041 1.063.041h2.857l-.72-.72a.75.75 0 1 1 1.061-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-2.931c-.545 0-.92 0-1.277-.07a3.75 3.75 0 0 1-2.071-1.172c-.243-.27-.436-.592-.717-1.06l-.037-.062a.75.75 0 0 1 .257-1.03" clip-rule="evenodd"></svg:path>`,
})
export class SolarShuffleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeBoldIcon],svg[solar-sidebar-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13zm13.75 9.994V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828c-.974.975-2.442 1.139-5.078 1.166M9.97 15.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06m-.268-1.207a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 0 0 1.404.526zM6.53 13.47a.75.75 0 0 1 0 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSidebarCodeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeBoldDuotoneIcon],svg[solar-sidebar-code-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h5V3h-5C6.229 3 4.343 3 3.172 4.172" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 13v-2c0-3.771 0-5.657-1.172-6.828c-.974-.975-3.192-1.139-5.828-1.166v17.988c2.636-.027 4.854-.191 5.828-1.166C22 18.657 22 16.771 22 13m-12.737.298a.75.75 0 0 1 .44.965l-1.5 4a.75.75 0 0 1-1.405-.526l1.5-4a.75.75 0 0 1 .965-.44m-2.733.173a.75.75 0 0 1 0 1.06l-.47.47l.47.47a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0m3.44 2a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarSidebarCodeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeBrokenIcon],svg[solar-sidebar-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7M15 3v10m0 4v4"></svg:path><svg:path stroke-linejoin="round" d="m6 14l-1 1l1 1m4.5 0l1 1l-1 1M9 14l-1.5 4"></svg:path></svg:g>`,
})
export class SolarSidebarCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeLineDuotoneIcon],svg[solar-sidebar-code-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M15 21V3" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m6 14l-1 1l1 1m4.5 0l1 1l-1 1M9 14l-1.5 4"></svg:path></svg:g>`,
})
export class SolarSidebarCodeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeLinearIcon],svg[solar-sidebar-code-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M15 21V3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m6 14l-1 1l1 1m4.5 0l1 1l-1 1M9 14l-1.5 4"></svg:path></svg:g>`,
})
export class SolarSidebarCodeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeOutlineIcon],svg[solar-sidebar-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.702 14.263a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 1 0 1.404.526zm-3.172.267a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06l1 1a.75.75 0 0 0 1.06-1.06L6.06 15zm4.5.94a.75.75 0 1 0-1.06 1.06l.47.47l-.47.47a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 2.25h4.112l.982.001c1.384.004 2.523.027 3.451.152c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-.928.125-2.067.148-3.45.152h-.073l-.905.001H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m4.306 1.5v16.5H10c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289v-2c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14zm4.04 16.36c-.682.092-1.506.123-2.54.134V3.756c1.034.01 1.858.042 2.54.134c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289v2c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812" clip-rule="evenodd"></svg:path>`,
})
export class SolarSidebarCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticBoldIcon],svg[solar-sidebar-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4.25V3H10C6.229 3 4.343 3 3.172 4.172M15.75 3.006v17.988c2.636-.027 4.104-.191 5.078-1.166C22 18.657 22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828c-.974-.975-2.442-1.139-5.078-1.166" clip-rule="evenodd"></svg:path>`,
})
export class SolarSidebarMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticBoldDuotoneIcon],svg[solar-sidebar-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h5V3h-5C6.229 3 4.343 3 3.172 4.172" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 13v-2c0-3.771 0-5.657-1.172-6.828c-.974-.975-3.192-1.139-5.828-1.166v17.988c2.636-.027 4.854-.191 5.828-1.166C22 18.657 22 16.771 22 13"></svg:path>`,
})
export class SolarSidebarMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticBrokenIcon],svg[solar-sidebar-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 3v10m0 4v4M2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path>`,
})
export class SolarSidebarMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticLineDuotoneIcon],svg[solar-sidebar-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M15 21V3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSidebarMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticLinearIcon],svg[solar-sidebar-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M15 21V3"></svg:path></svg:g>`,
})
export class SolarSidebarMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticOutlineIcon],svg[solar-sidebar-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 2.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h5.022l.072-.001c1.384-.004 2.523-.027 3.451-.152c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-.928-.125-2.067-.148-3.45-.152h-.073l-.91-.001zm4.306 1.5H10c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 5.705 2.89 6.71c-.138 1.029-.14 2.383-.14 4.29v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4.25zm1.5 16.494c1.034-.01 1.858-.042 2.54-.134c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-.68-.092-1.505-.123-2.539-.134z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSidebarMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarBoldIcon],svg[solar-siderbar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v2c0 3.771 0 5.657-1.172 6.828c-.974.975-2.442 1.139-5.078 1.166V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3m-5.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m1 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSiderbarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarBoldDuotoneIcon],svg[solar-siderbar-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h5V3h-5C6.229 3 4.343 3 3.172 4.172" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.5 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm1 4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM22 13v-2c0-3.771 0-5.657-1.172-6.828c-.974-.975-3.192-1.139-5.828-1.166v17.988c2.636-.027 4.854-.191 5.828-1.166C22 18.657 22 16.771 22 13"></svg:path>`,
})
export class SolarSiderbarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarBrokenIcon],svg[solar-siderbar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.5 10h6m-5 4h4M15 3v10m0 4v4M2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path>`,
})
export class SolarSiderbarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarLineDuotoneIcon],svg[solar-siderbar-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M5.5 10h6m-5 4h4"></svg:path><svg:path stroke-linecap="round" d="M15 21V3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSiderbarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarLinearIcon],svg[solar-siderbar-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></svg:path><svg:path stroke-linecap="round" d="M5.5 10h6m-5 4h4m4.5 7V3"></svg:path></svg:g>`,
})
export class SolarSiderbarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarOutlineIcon],svg[solar-siderbar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM5.75 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 2.25c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h5.022l.072-.001c1.384-.004 2.523-.027 3.451-.152c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-.928-.125-2.067-.148-3.45-.152h-.073l-.91-.001zm4.306 1.5H10c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 5.705 2.89 6.71c-.138 1.029-.14 2.383-.14 4.29v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4.25zm1.5 16.494c1.034-.01 1.858-.042 2.54-.134c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-.68-.092-1.505-.123-2.539-.134z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSiderbarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2BoldIcon],svg[solar-signpost-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.5H6.704c-.658 0-.986 0-1.288.098a2 2 0 0 0-.383.17c-.274.16-.494.404-.933.894c-.85.947-1.276 1.42-1.379 1.974a2 2 0 0 0 0 .728c.103.553.528 1.027 1.379 1.974c.44.49.659.734.933.893q.183.105.383.17c.302.099.63.099 1.288.099h4.546v2H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h4.75v1.75H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25V19.5h4.546c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H12.75v-2h4.75c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7s0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 3.5 18.904 3.5 17.5 3.5h-4.75zM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSignpost2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2BoldDuotoneIcon],svg[solar-signpost-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.75 2a.75.75 0 0 0-1.5 0v1.5h1.5zm-1.5 8.5v2h1.5v-2zm0 10.75V19.5h1.5v1.75H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" opacity=".5"></svg:path><svg:path d="M17.5 3.5H6.704c-.658 0-.987 0-1.289.098a2 2 0 0 0-.382.17c-.275.16-.494.404-.934.894c-.85.947-1.276 1.42-1.378 1.974a2 2 0 0 0 0 .728c.102.553.528 1.027 1.378 1.974c.44.49.66.734.934.893q.183.105.382.17c.302.099.63.099 1.289.099H17.5c1.404 0 2.106 0 2.61-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7s0-2.107-.338-2.611a2 2 0 0 0-.551-.552C19.606 3.5 18.904 3.5 17.5 3.5M9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm8.296 6.25H6.5c-1.405 0-2.107 0-2.612.337a2 2 0 0 0-.551.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .551.552c.505.337 1.207.337 2.612.337h10.796c.657 0 .986 0 1.288-.098q.2-.066.382-.17c.275-.16.494-.404.934-.894c.85-.947 1.276-1.42 1.378-1.974a2 2 0 0 0 0-.728c-.102-.553-.528-1.027-1.378-1.974c-.44-.49-.66-.734-.934-.893a2 2 0 0 0-.382-.17c-.302-.099-.63-.099-1.288-.099M8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class SolarSignpost2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2BrokenIcon],svg[solar-signpost-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.337 18.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098a2 2 0 0 0 .383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.245.367-.312.84-.33 1.611m17.658-5.389a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.706c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.851-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.439-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099h10.796c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.245.367.312.84.33 1.611M14 22h-4M9 7h6m-6 9h6"></svg:path></svg:g>`,
})
export class SolarSignpost2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2LineDuotoneIcon],svg[solar-signpost-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7s0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099Zm10.592 9H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z"></svg:path><svg:path fill="currentColor" d="M12.75 20a.75.75 0 0 0-1.5 0zM14 22.75a.75.75 0 0 0 0-1.5zm-4-1.5a.75.75 0 0 0 0 1.5zM11.25 20v2h1.5v-2zM14 21.25h-4v1.5h4z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 7h6m-6 9h6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSignpost2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2LinearIcon],svg[solar-signpost-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4M9 7h6m-6 9h6"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7s0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099Zm10.592 9H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z"></svg:path></svg:g>`,
})
export class SolarSignpost2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2OutlineIcon],svg[solar-signpost-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 7A.75.75 0 0 1 9 6.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 7M9 15.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v.75H6.606c-.562 0-1.005 0-1.422.135a3 3 0 0 0-.526.235c-.38.22-.676.55-1.051.968l-.09.1c-.404.45-.744.828-.99 1.164c-.26.352-.463.715-.543 1.148a2.8 2.8 0 0 0 0 1c.08.433.282.796.542 1.148c.247.336.587.714.992 1.165l.089.1c.375.418.671.748 1.05.967q.252.145.527.235c.417.136.86.136 1.422.135h4.644v.5H6.462c-.67 0-1.229 0-1.681.046c-.473.048-.913.153-1.309.418c-.3.2-.558.458-.759.758c-.264.396-.369.835-.417 1.309c-.046.452-.046 1.011-.046 1.68v.077c0 .67 0 1.229.046 1.681c.048.473.153.913.417 1.309c.201.3.459.558.76.759c.395.264.835.369 1.308.417c.452.046 1.011.046 1.68.046h4.789v1H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1h4.644c.562 0 1.005 0 1.422-.135q.276-.09.526-.235c.38-.22.676-.55 1.051-.968l.09-.1c.404-.45.744-.828.99-1.164c.26-.352.463-.715.543-1.148c.061-.33.061-.67 0-1c-.08-.433-.282-.796-.542-1.148c-.247-.336-.587-.714-.992-1.165l-.089-.1c-.375-.418-.671-.748-1.05-.967a3 3 0 0 0-.527-.235c-.417-.136-.86-.136-1.422-.135H12.75v-.5h4.788c.67 0 1.229 0 1.681-.046c.473-.048.913-.153 1.309-.418c.3-.2.558-.458.759-.758c.264-.396.369-.836.417-1.309c.046-.452.046-1.011.046-1.68v-.077c0-.67 0-1.229-.046-1.681c-.048-.473-.153-.913-.418-1.309a2.8 2.8 0 0 0-.758-.759c-.396-.264-.836-.369-1.309-.417c-.452-.046-1.011-.046-1.68-.046H12.75zM6.704 4.25c-.706 0-.894.009-1.056.061a1.3 1.3 0 0 0-.239.107c-.148.085-.28.22-.751.745c-.435.484-.725.808-.924 1.078c-.191.26-.253.41-.275.532a1.3 1.3 0 0 0 0 .454c.022.121.084.272.275.532c.199.27.489.594.924 1.078c.472.526.603.66.751.745q.114.066.239.107c.162.052.35.061 1.056.061H17.5c.718 0 1.2 0 1.567-.038c.355-.036.519-.1.628-.173c.136-.09.253-.208.344-.345c.073-.108.137-.272.173-.627c.037-.367.038-.85.038-1.567c0-.718 0-1.2-.038-1.567c-.036-.355-.1-.519-.173-.627a1.3 1.3 0 0 0-.344-.345c-.109-.073-.273-.137-.628-.173c-.367-.037-.85-.038-1.567-.038zm10.592 9c.706 0 .894.009 1.056.061q.125.04.239.107c.148.085.28.22.751.745c.435.484.725.808.924 1.078c.191.26.253.41.275.532q.042.227 0 .454c-.022.121-.084.272-.275.532c-.199.27-.489.594-.924 1.078c-.472.526-.603.66-.751.745q-.114.066-.24.107c-.161.052-.349.061-1.055.061H6.5c-.718 0-1.2 0-1.567-.038c-.355-.036-.519-.1-.627-.173a1.3 1.3 0 0 1-.345-.344c-.073-.109-.137-.273-.173-.628c-.037-.367-.038-.85-.038-1.567c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627a1.3 1.3 0 0 1 .345-.345c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSignpost2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostBoldIcon],svg[solar-signpost-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.5H6.704c-.658 0-.986 0-1.288.098a2 2 0 0 0-.383.17c-.274.16-.494.404-.933.894c-.85.947-1.276 1.42-1.379 1.974a2 2 0 0 0 0 .728c.103.553.528 1.027 1.379 1.974c.44.49.659.734.933.893q.183.105.383.17c.302.099.63.099 1.288.099h4.546v2H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h4.75v1.75H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25V19.5h4.546c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H12.75v-2h4.75c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7s0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 3.5 18.904 3.5 17.5 3.5h-4.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSignpostBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostBoldDuotoneIcon],svg[solar-signpost-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.5h1.5zm-1.5 8.5v2h1.5v-2zm0 10.75V19.5h1.5v1.75H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 3.5H6.703c-.658 0-.987 0-1.289.098a2 2 0 0 0-.382.17c-.275.16-.494.404-.934.894c-.85.947-1.276 1.42-1.378 1.974a2 2 0 0 0 0 .728c.102.553.528 1.027 1.378 1.974c.44.49.66.734.934.893q.183.105.382.17c.302.099.63.099 1.289.099H17.5c1.404 0 2.106 0 2.61-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7s0-2.107-.338-2.611a2 2 0 0 0-.551-.552C19.606 3.5 18.904 3.5 17.5 3.5zm0 9H6.5c-1.405 0-2.107 0-2.612.337a2 2 0 0 0-.551.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .551.552c.505.337 1.207.337 2.612.337h10.796c.657 0 .986 0 1.288-.098q.2-.066.382-.17c.275-.16.494-.404.934-.894c.85-.947 1.276-1.42 1.378-1.974a2 2 0 0 0 0-.728c-.102-.553-.528-1.027-1.378-1.974c-.44-.49-.66-.734-.934-.893a2 2 0 0 0-.382-.17c-.302-.099-.63-.099-1.288-.099z"></svg:path>`,
})
export class SolarSignpostBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostBrokenIcon],svg[solar-signpost-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.337 18.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098a2 2 0 0 0 .383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.245.367-.312.84-.33 1.611m17.658-5.389a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.706c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.851-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.439-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099h10.796c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.245.367.312.84.33 1.611M14 22h-4"></svg:path></svg:g>`,
})
export class SolarSignpostBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostLineDuotoneIcon],svg[solar-signpost-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7s0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099Zm10.592 9H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z"></svg:path><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm0 9a.75.75 0 0 0-1.5 0zm0 9a.75.75 0 0 0-1.5 0zM14 22.75a.75.75 0 0 0 0-1.5zm-4-1.5a.75.75 0 0 0 0 1.5zM11.25 2v1h1.5V2zm0 9v1h1.5v-1zm0 9v2h1.5v-2zM14 21.25h-4v1.5h4z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSignpostLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostLinearIcon],svg[solar-signpost-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V2zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5v-1zm1.5 9a.75.75 0 0 0-1.5 0zm-1.5 0v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7s0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a2 2 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894c-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974c.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099Zm10.592 9H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4"></svg:path></svg:g>`,
})
export class SolarSignpostLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostOutlineIcon],svg[solar-signpost-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v.75H6.606c-.562 0-1.005 0-1.422.135a3 3 0 0 0-.526.235c-.38.22-.676.55-1.051.968l-.09.1c-.404.45-.744.828-.99 1.164c-.26.352-.463.715-.543 1.148a2.8 2.8 0 0 0 0 1c.08.433.282.796.542 1.148c.247.336.587.714.992 1.165l.089.1c.375.418.671.748 1.05.967q.252.145.527.235c.417.136.86.136 1.422.135h4.644v.5H6.462c-.67 0-1.229 0-1.681.046c-.473.048-.913.153-1.309.418c-.3.2-.558.458-.759.758c-.264.396-.369.835-.417 1.309c-.046.452-.046 1.011-.046 1.68v.077c0 .67 0 1.229.046 1.681c.048.473.153.913.417 1.309c.201.3.459.558.76.759c.395.264.835.369 1.308.417c.452.046 1.011.046 1.68.046h4.789v1H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1h4.644c.562 0 1.005 0 1.422-.135q.276-.09.526-.235c.38-.22.676-.55 1.051-.968l.09-.1c.404-.45.744-.828.99-1.164c.26-.352.463-.715.543-1.148c.061-.33.061-.67 0-1c-.08-.433-.282-.796-.542-1.148c-.247-.336-.587-.714-.992-1.165l-.089-.1c-.375-.418-.671-.748-1.05-.967a3 3 0 0 0-.527-.235c-.417-.136-.86-.136-1.422-.135H12.75v-.5h4.788c.67 0 1.229 0 1.681-.046c.473-.048.913-.153 1.309-.418c.3-.2.558-.458.759-.758c.264-.396.369-.836.417-1.309c.046-.452.046-1.011.046-1.68v-.077c0-.67 0-1.229-.046-1.681c-.048-.473-.153-.913-.418-1.309a2.8 2.8 0 0 0-.758-.759c-.396-.264-.836-.369-1.309-.417c-.452-.046-1.011-.046-1.68-.046H12.75zM5.648 4.311c.162-.052.35-.061 1.056-.061H17.5c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173c.136.09.253.208.344.345c.073.108.137.272.173.627c.037.367.038.85.038 1.567c0 .718 0 1.2-.038 1.567c-.036.355-.1.519-.173.627a1.3 1.3 0 0 1-.344.345c-.109.073-.273.137-.628.173c-.367.037-.85.038-1.567.038H6.704c-.706 0-.894-.009-1.056-.061a1.3 1.3 0 0 1-.239-.107c-.148-.085-.28-.22-.751-.745c-.435-.484-.725-.808-.924-1.078c-.191-.26-.253-.41-.275-.532a1.3 1.3 0 0 1 0-.454c.022-.121.084-.272.275-.532c.199-.27.489-.594.924-1.078c.472-.526.603-.66.751-.745a1.3 1.3 0 0 1 .239-.107m12.704 9c-.162-.052-.35-.061-1.056-.061H6.5c-.718 0-1.2 0-1.567.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567c0 .718 0 1.2.038 1.567c.036.355.1.519.173.628c.09.136.208.253.345.344c.108.073.272.137.627.173c.367.037.85.038 1.567.038h10.796c.706 0 .894-.009 1.056-.061q.125-.04.239-.107c.148-.085.28-.22.751-.745c.435-.484.725-.808.924-1.078c.191-.26.253-.41.275-.532c.028-.15.028-.304 0-.454c-.022-.121-.084-.272-.275-.532c-.199-.27-.489-.594-.924-1.078c-.472-.526-.603-.66-.751-.745a1.3 1.3 0 0 0-.24-.107" clip-rule="evenodd"></svg:path>`,
})
export class SolarSignpostOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardBoldIcon],svg[solar-sim-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-3.111-3.337C9.393 19 10.096 19 11.5 19v-7c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552m6.222 0C14.607 19 13.904 19 12.5 19v-3H16c-.005 1.079-.043 1.67-.337 2.111a2 2 0 0 1-.552.552M12.5 12c1.405 0 2.107 0 2.611.337c.218.146.406.334.552.552c.294.44.332 1.032.336 2.111H12.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardBoldDuotoneIcon],svg[solar-sim-card-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.889 18.663C9.393 19 10.096 19 11.5 19v-7c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552m6.222 0C14.607 19 13.904 19 12.5 19v-3H16c-.005 1.079-.043 1.67-.337 2.111a2 2 0 0 1-.552.552M12.5 12c1.405 0 2.107 0 2.611.337c.218.146.406.334.552.552c.294.44.332 1.032.336 2.111H12.5z"></svg:path>`,
})
export class SolarSimCardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardBrokenIcon],svg[solar-sim-card-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 12h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552C9.393 19 10.096 19 11.5 19h.5m0-7h.5c1.405 0 2.107 0 2.611.337c.218.146.406.334.552.552c.337.504.337 1.207.337 2.611M12 12v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337c.218-.146.406-.334.552-.552C16 17.607 16 16.904 16 15.5M12 19v-3.5m0 0h4"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path></svg:g>`,
})
export class SolarSimCardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardLineDuotoneIcon],svg[solar-sim-card-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path d="M12 12h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552C9.393 19 10.096 19 11.5 19h.5m0-7h.5c1.405 0 2.107 0 2.611.337c.218.146.406.334.552.552c.337.504.337 1.207.337 2.611M12 12v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337c.218-.146.406-.334.552-.552C16 17.607 16 16.904 16 15.5M12 19v-3.5m0 0h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSimCardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardLinearIcon],svg[solar-sim-card-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path d="M12 12h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552C9.393 19 10.096 19 11.5 19h.5m0-7h.5c1.405 0 2.107 0 2.611.337c.218.146.406.334.552.552c.337.504.337 1.207.337 2.611M12 12v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337c.218-.146.406-.334.552-.552C16 17.607 16 16.904 16 15.5M12 19v-3.5m0 0h4"></svg:path></svg:g>`,
})
export class SolarSimCardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticBoldIcon],svg[solar-sim-card-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-3.39-8.962C8.803 13 9.035 13 9.5 13h5c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89s0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038h-5c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C7 16.197 7 15.965 7 15.5s0-.697.038-.89a2 2 0 0 1 1.572-1.572" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticBoldDuotoneIcon],svg[solar-sim-card-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.5 13c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 0 0-1.572-1.572C15.197 13 14.965 13 14.5 13z"></svg:path>`,
})
export class SolarSimCardMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticBrokenIcon],svg[solar-sim-card-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path><svg:path d="M14.5 13h-5c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 0 0-1.572-1.572C15.197 13 14.965 13 14.5 13Z"></svg:path></svg:g>`,
})
export class SolarSimCardMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticLineDuotoneIcon],svg[solar-sim-card-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path d="M14.5 13h-5c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 0 0-1.572-1.572C15.197 13 14.965 13 14.5 13Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSimCardMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticLinearIcon],svg[solar-sim-card-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path d="M14.5 13h-5c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 0 0-1.572-1.572C15.197 13 14.965 13 14.5 13Z"></svg:path></svg:g>`,
})
export class SolarSimCardMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticOutlineIcon],svg[solar-sim-card-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.62 2.762A8 8 0 0 0 12 2.75c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386c0-.353 0-.487-.012-.62a3.3 3.3 0 0 0-.749-1.807a8 8 0 0 0-.439-.457L14.884 3.95a8 8 0 0 0-.457-.44a3.3 3.3 0 0 0-1.806-.748m-.588-1.512c.311 0 .512 0 .719.018a4.8 4.8 0 0 1 2.64 1.094c.16.133.305.279.53.504l.024.023l5.19 5.19c.224.225.37.37.503.53a4.8 4.8 0 0 1 1.094 2.64c.018.207.018.408.018.72v.088c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19zm-2.605 11h5.146c.393 0 .696 0 .963.053a2.75 2.75 0 0 1 2.161 2.16c.053.268.053.571.053.964v.146c0 .393 0 .696-.053.963a2.75 2.75 0 0 1-2.16 2.161c-.268.053-.571.053-.964.053H9.427c-.393 0-.696 0-.963-.053a2.75 2.75 0 0 1-2.161-2.16c-.053-.268-.053-.571-.053-.964v-.146c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161c.268-.053.571-.053.964-.053m.073 1.5c-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744c0 .5.004.641.024.744c.099.496.486.883.982.982c.103.02.243.024.744.024h5c.5 0 .641-.004.744-.024a1.25 1.25 0 0 0 .982-.982c.02-.103.024-.243.024-.744c0-.5-.004-.641-.024-.744a1.25 1.25 0 0 0-.982-.982c-.103-.02-.243-.024-.744-.024z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardOutlineIcon],svg[solar-sim-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.62 2.762A8 8 0 0 0 12 2.75c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386c0-.353 0-.487-.012-.62a3.3 3.3 0 0 0-.749-1.807a8 8 0 0 0-.439-.457L14.884 3.95a8 8 0 0 0-.457-.44a3.3 3.3 0 0 0-1.806-.748m-.588-1.512c.311 0 .512 0 .719.018a4.8 4.8 0 0 1 2.64 1.094c.16.133.305.279.53.504l.024.023l5.19 5.19c.224.225.37.37.503.53a4.8 4.8 0 0 1 1.094 2.64c.018.207.018.408.018.72v.088c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19zm-.57 10h1.076c.67 0 1.229 0 1.681.046c.474.048.913.153 1.309.418c.3.2.558.458.758.758c.265.396.37.836.418 1.309c.046.452.046 1.011.046 1.68v.077c0 .67 0 1.229-.046 1.681c-.048.473-.153.913-.418 1.309c-.2.3-.458.558-.758.759c-.396.264-.835.369-1.309.417c-.452.046-1.011.046-1.68.046h-1.077c-.67 0-1.229 0-1.681-.046c-.473-.048-.913-.153-1.309-.418a2.8 2.8 0 0 1-.759-.758c-.264-.396-.369-.835-.417-1.309c-.046-.452-.046-1.011-.046-1.68v-.077c0-.67 0-1.229.046-1.681c.048-.473.153-.913.417-1.309c.201-.3.459-.558.76-.758c.395-.265.835-.37 1.308-.418c.452-.046 1.011-.046 1.68-.046m-1.53 1.538c-.354.036-.518.1-.626.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567c0 .718 0 1.2.038 1.567c.036.355.1.519.173.628c.09.136.208.253.345.344c.108.073.272.137.627.173c.323.033.734.037 1.317.038v-5.5c-.583 0-.994.005-1.317.038m2.818-.038v2h2.497a9 9 0 0 0-.035-.817c-.036-.355-.1-.519-.173-.627a1.3 1.3 0 0 0-.344-.345c-.109-.073-.273-.137-.628-.173c-.323-.033-.734-.037-1.317-.038m2.497 3.5H12.75v2c.583 0 .994-.005 1.317-.038c.355-.036.519-.1.627-.173a1.3 1.3 0 0 0 .345-.344c.073-.109.137-.273.173-.628a9 9 0 0 0 .035-.817" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsBoldIcon],svg[solar-sim-cards-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.828 16.828C22 15.657 22 13.771 22 10a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 14 2c-3.771 0-5.657 0-6.83 1.172c-.377.377-.633.83-.807 1.395C7.371 4.5 8.55 4.5 9.896 4.5H10c1.427 0 2.789.571 3.792 1.575l4.133 4.133A5.36 5.36 0 0 1 19.5 14v.104c0 1.346 0 2.525-.067 3.532c.565-.174 1.018-.43 1.395-.808"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828S13.771 22 10 22m-2.707-3.293C7.586 19 8.057 19 9 19h.5v-5H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707m5.414 0C12.414 19 11.943 19 11 19h-.5v-2H13c0 .943 0 1.414-.293 1.707M11 14c.943 0 1.414 0 1.707.293S13 15.057 13 16h-2.5v-2z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsBoldDuotoneIcon],svg[solar-sim-cards-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 20.828C4.343 22 6.229 22 10 22s5.657 0 6.828-1.172S18 17.771 18 14a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 10 6C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828M11 14c.943 0 1.414 0 1.707.293S13 15.057 13 16h-2.5v-2zm-1.5 5H9c-.943 0-1.414 0-1.707-.293S7 17.943 7 17v-1c0-.943 0-1.414.293-1.707S8.057 14 9 14h.5zm1.5 0h-.5v-2H13c0 .943 0 1.414-.293 1.707S11.943 19 11 19" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.093 6.093c.123-1.352.41-2.253 1.079-2.921C8.343 2 10.229 2 14 2a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 22 10c0 3.771 0 5.657-1.172 6.828c-.668.669-1.57.956-2.92 1.08C18 16.89 18 15.618 18 14a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 10.001 6c-1.62 0-2.892 0-3.908.093" opacity=".5"></svg:path>`,
})
export class SolarSimCardsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsBrokenIcon],svg[solar-sim-cards-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828S13.771 22 10 22s-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M18 17.899c1.3-.128 2.175-.417 2.828-1.07C22 15.656 22 13.77 22 10a3.86 3.86 0 0 0-1.136-2.731L20.597 7M6.102 6c.127-1.3.416-2.175 1.07-2.828C8.343 2 10.229 2 14 2a3.86 3.86 0 0 1 2.731 1.136l.269.268"></svg:path><svg:path d="M10 14H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707S8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293S13 15.057 13 16v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293S13 17.943 13 17v-.5M10 19v-2.5m0 0h3"></svg:path></svg:g>`,
})
export class SolarSimCardsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsLineDuotoneIcon],svg[solar-sim-cards-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.172 20.828C4.343 22 6.229 22 10 22s5.657 0 6.828-1.172S18 17.771 18 14a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 10 6C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828Z"></svg:path><svg:path d="M18 17.899c1.3-.128 2.175-.417 2.828-1.07C22 15.656 22 13.77 22 10a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 14.001 2c-3.772 0-5.658 0-6.83 1.172C6.519 3.825 6.23 4.7 6.102 6M10 14H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707S8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293S13 15.057 13 16v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293S13 17.943 13 17v-.5M10 19v-2.5m0 0h3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSimCardsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsLinearIcon],svg[solar-sim-cards-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.172 20.828C4.343 22 6.229 22 10 22s5.657 0 6.828-1.172S18 17.771 18 14a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 10 6C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828Z"></svg:path><svg:path d="M18 17.899c1.3-.128 2.175-.417 2.828-1.07C22 15.656 22 13.77 22 10a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 14.001 2c-3.772 0-5.658 0-6.83 1.172C6.519 3.825 6.23 4.7 6.102 6M10 14H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707S8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293S13 15.057 13 16v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293S13 17.943 13 17v-.5M10 19v-2.5m0 0h3"></svg:path></svg:g>`,
})
export class SolarSimCardsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsOutlineIcon],svg[solar-sim-cards-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.944 1.25H14c1.226 0 2.398.491 3.262 1.355l4.133 4.133A4.6 4.6 0 0 1 22.75 10v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.728.728-1.646 1.062-2.775 1.225c-.163 1.129-.497 2.047-1.225 2.775c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.728-.728 1.646-1.062 2.775-1.225c.163-1.129.497-2.047 1.225-2.775c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.959 5.286c.86-.036 1.849-.036 2.985-.036H10c1.226 0 2.398.491 3.262 1.355l4.133 4.133A4.6 4.6 0 0 1 18.75 14v.056c0 1.136 0 2.126-.036 2.985c.752-.146 1.225-.383 1.584-.743c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289c0-.824-.33-1.615-.916-2.201l-4.133-4.133A3.1 3.1 0 0 0 14 2.75c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.36.36-.597.832-.743 1.584M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289c0-.824-.33-1.615-.916-2.201L12.2 7.666A3.1 3.1 0 0 0 10 6.75c-1.907 0-3.261.002-4.29.14m3.244 6.36h2.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v1.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-2.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-1.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.129 1.572l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v1c0 .493.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03h.25v-3.5H9c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042m2.924-.072v1h1.5a6 6 0 0 0-.03-.747a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03zm1.5 2.5h-1.5v1H11c.493 0 .787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.023-.172.028-.4.03-.747" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenBoldIcon],svg[solar-siren-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2V16c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16zm9.5-3.75a1.5 1.5 0 0 1-.75 1.3v2.45h-1.5V18.8a1.5 1.5 0 1 1 2.25-1.3m1.5-7.435a.75.75 0 0 0 0 1.5c.842 0 1.464.638 1.436 1.408a.75.75 0 0 0 1.499.054c.061-1.69-1.317-2.962-2.935-2.962" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m9.53 4.28l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06m-18-1.06a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class SolarSirenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenBoldDuotoneIcon],svg[solar-siren-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21.25V16c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16v5.25z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.25 10.815a.75.75 0 0 1 .75-.75c1.618 0 2.996 1.272 2.935 2.962a.75.75 0 0 1-1.5-.054c.029-.77-.593-1.408-1.435-1.408a.75.75 0 0 1-.75-.75M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5zm8.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5zM12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m9.53 4.28l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06m-18-1.06a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class SolarSirenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenBrokenIcon],svg[solar-siren-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185c-.188.37-.311.778-.392 1.27M4 22v-6"></svg:path><svg:path stroke-linecap="round" d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h12m8 0h-4M12 2v3m9 0l-1.5 1.5M3 5l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3"></svg:path></svg:g>`,
})
export class SolarSirenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenLineDuotoneIcon],svg[solar-siren-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16v6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h20M12 2v3m9 0l-1.5 1.5M3 5l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSirenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenLinearIcon],svg[solar-siren-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16v6"></svg:path><svg:path stroke-linecap="round" d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h20M12 2v3m9 0l-1.5 1.5M3 5l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3"></svg:path></svg:g>`,
})
export class SolarSirenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenOutlineIcon],svg[solar-siren-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM15 10.065a.75.75 0 0 0 0 1.5c.842 0 1.464.638 1.436 1.408a.75.75 0 0 0 1.499.054c.061-1.69-1.317-2.962-2.935-2.962"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.966 7.25c-1.371 0-2.447 0-3.311.07c-.88.073-1.607.221-2.265.557a5.75 5.75 0 0 0-2.513 2.513c-.336.658-.484 1.385-.556 2.265c-.071.864-.071 1.94-.071 3.311v5.284H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25v-5.284c0-1.371 0-2.447-.07-3.311c-.072-.88-.221-1.607-.557-2.265a5.75 5.75 0 0 0-2.513-2.513c-.658-.336-1.385-.484-2.265-.556c-.864-.071-1.94-.071-3.311-.071zm.784 14h6.5V16c0-1.412 0-2.427-.066-3.223c-.064-.787-.188-1.295-.397-1.707a4.25 4.25 0 0 0-1.857-1.857c-.412-.21-.92-.333-1.707-.397c-.796-.065-1.81-.066-3.223-.066s-2.427 0-3.223.066c-.787.064-1.295.188-1.706.397a4.25 4.25 0 0 0-1.858 1.858c-.21.411-.333.919-.397 1.706c-.065.796-.066 1.81-.066 3.223v5.25h6.5v-1.628a2.251 2.251 0 1 1 1.5 0zm-.75-3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m21.53 5.53l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06m-18-1.06a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class SolarSirenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedBoldIcon],svg[solar-siren-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 21.25h2V16a8 8 0 1 1 16 0v5.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5m10.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5zm.845-7.581a.75.75 0 0 1 .977-.414a4.76 4.76 0 0 1 2.623 2.623a.75.75 0 0 1-1.39.563a3.26 3.26 0 0 0-1.796-1.796a.75.75 0 0 1-.414-.976" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class SolarSirenRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedBoldDuotoneIcon],svg[solar-siren-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16v5.25h16V16a8 8 0 1 0-16 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm8.78 3.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06zm11.042 5.335a.75.75 0 0 0-.563 1.39c.814.33 1.466.981 1.795 1.796a.75.75 0 1 0 1.39-.563a4.76 4.76 0 0 0-2.622-2.623M12.75 18.8a1.5 1.5 0 1 0-1.5 0v2.45h1.5zM4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarSirenRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedBrokenIcon],svg[solar-siren-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 22v-6a8 8 0 0 0-14.93-4M4 22v-6"></svg:path><svg:path stroke-linecap="round" d="M14.29 11.5a4 4 0 0 1 2.21 2.21M12 2v3m9 1l-1.5 1.5M3 6l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3M2 22h12m8 0h-4"></svg:path></svg:g>`,
})
export class SolarSirenRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedLineDuotoneIcon],svg[solar-siren-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 22v-6a8 8 0 1 0-16 0v6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.29 11.5a4 4 0 0 1 2.21 2.21M2 22h20M12 2v3m9 1l-1.5 1.5M3 6l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSirenRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedLinearIcon],svg[solar-siren-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 22v-6a8 8 0 1 0-16 0v6"></svg:path><svg:path stroke-linecap="round" d="M14.29 11.5a4 4 0 0 1 2.21 2.21M2 22h20M12 2v3m9 1l-1.5 1.5M3 6l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3"></svg:path></svg:g>`,
})
export class SolarSirenRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedOutlineIcon],svg[solar-siren-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm1.822 8.805a.75.75 0 1 0-.563 1.39c.814.33 1.466.981 1.796 1.796a.75.75 0 1 0 1.39-.563a4.76 4.76 0 0 0-2.623-2.623"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 7.25A8.75 8.75 0 0 0 3.25 16v5.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V16A8.75 8.75 0 0 0 12 7.25m.75 14h6.5V16a7.25 7.25 0 1 0-14.5 0v5.25h6.5v-1.628a2.251 2.251 0 1 1 1.5 0zm-.75-3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class SolarSirenRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardBoldIcon],svg[solar-skateboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SolarSkateboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardBoldDuotoneIcon],svg[solar-skateboard-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarSkateboardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardBrokenIcon],svg[solar-skateboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 7l.813 1.219A4 4 0 0 0 6.14 10H12m10-3l-.812 1.219A4 4 0 0 1 17.859 10H16"></svg:path><svg:circle cx="7" cy="15" r="2"></svg:circle><svg:circle cx="17" cy="15" r="2"></svg:circle></svg:g>`,
})
export class SolarSkateboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardLineDuotoneIcon],svg[solar-skateboard-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 7l.813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7" opacity=".5"></svg:path><svg:circle cx="7" cy="15" r="2"></svg:circle><svg:circle cx="17" cy="15" r="2"></svg:circle></svg:g>`,
})
export class SolarSkateboardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardLinearIcon],svg[solar-skateboard-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 7l.813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7"></svg:path><svg:circle cx="7" cy="15" r="2"></svg:circle><svg:circle cx="17" cy="15" r="2"></svg:circle></svg:g>`,
})
export class SolarSkateboardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardOutlineIcon],svg[solar-skateboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.624 6.584l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219l1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219zM7 13.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M4.25 15a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M17 13.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M14.25 15a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSkateboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingBoldIcon],svg[solar-skateboarding-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9.668 1.345a2.49 2.49 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356l-.124.1a1.25 1.25 0 0 0 .115 1.98l.153.097l.01.006l.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06q-.019-.01-.04-.025l-.018-.01q-.12-.074-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272z"></svg:path><svg:path fill="currentColor" d="M2.498 16.443a.75.75 0 0 1 1.06.055l1.204 1.338c.237.264.574.414.929.414h12.618c.355 0 .692-.15.93-.414l1.203-1.338a.75.75 0 1 1 1.116 1.004l-1.205 1.338a2.75 2.75 0 0 1-2.044.91H5.691a2.75 2.75 0 0 1-2.044-.91l-1.204-1.338a.75.75 0 0 1 .055-1.06M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15.772 9.818a.75.75 0 0 1 .91-.545a7.5 7.5 0 0 0 3.636 0a.75.75 0 1 1 .364 1.455a9 9 0 0 1-4.364 0a.75.75 0 0 1-.546-.91"></svg:path><svg:path fill="currentColor" d="M11.53 13.47a.75.75 0 0 1 0 1.06a5.87 5.87 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0"></svg:path>`,
})
export class SolarSkateboardingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingBoldDuotoneIcon],svg[solar-skateboarding-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9.668 1.345a2.49 2.49 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356l-.124.1a1.25 1.25 0 0 0 .115 1.98l.153.097l.01.006l.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06q-.019-.01-.04-.025l-.018-.01q-.12-.074-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272z"></svg:path><svg:path fill="currentColor" d="M2.498 16.443a.75.75 0 0 1 1.06.055l1.204 1.338c.237.264.574.414.929.414h12.618c.355 0 .692-.15.93-.414l1.203-1.338a.75.75 0 1 1 1.116 1.004l-1.205 1.338a2.75 2.75 0 0 1-2.044.91H5.691a2.75 2.75 0 0 1-2.044-.91l-1.204-1.338a.75.75 0 0 1 .055-1.06"></svg:path><svg:path fill="currentColor" d="M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15.772 9.818a.75.75 0 0 1 .91-.545a7.5 7.5 0 0 0 3.636 0a.75.75 0 0 1 .364 1.455a9 9 0 0 1-4.364 0a.75.75 0 0 1-.546-.91M11.53 13.47a.75.75 0 0 1 0 1.06a5.87 5.87 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0" opacity=".5"></svg:path>`,
})
export class SolarSkateboardingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingBrokenIcon],svg[solar-skateboarding-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 17l1.204 1.338A2 2 0 0 0 5.691 19H10m11-2l-1.204 1.338a2 2 0 0 1-1.487.662H14"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.517c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118l.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5m5.5-4a8.25 8.25 0 0 0 4 0"></svg:path></svg:g>`,
})
export class SolarSkateboardingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingLineDuotoneIcon],svg[solar-skateboarding-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 17l1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.517c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118l.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5m5.5-4a8.25 8.25 0 0 0 4 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSkateboardingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingLinearIcon],svg[solar-skateboarding-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 17l1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.517c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118l.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5m5.5-4a8.25 8.25 0 0 0 4 0"></svg:path></svg:g>`,
})
export class SolarSkateboardingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingOutlineIcon],svg[solar-skateboarding-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.332 5.345a2.49 2.49 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356l-.124.1a1.25 1.25 0 0 0 .115 1.98l.153.097l.01.006l.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06l-.04-.025l-.018-.01q-.12-.074-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272zm4.44 4.473a.75.75 0 0 1 .91-.546a7.5 7.5 0 0 0 3.636 0a.75.75 0 1 1 .364 1.456a9 9 0 0 1-4.364 0a.75.75 0 0 1-.546-.91M11.53 13.47a.75.75 0 0 1 0 1.06a5.87 5.87 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M2.498 16.443a.75.75 0 0 1 1.06.055l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarSkateboardingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundBoldIcon],svg[solar-skateboarding-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.21 6.047a5.02 5.02 0 0 1 4.637-.357a1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516a3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-4.97 5.28a.75.75 0 1 0-1.06-1.06l-.622.621c-.476.477-.577.558-.682.602s-.234.057-.909.057H7a.75.75 0 0 0 0 1.5h1.361c.51 0 .961.002 1.379-.171c.417-.173.736-.493 1.095-.854l.074-.073z"></svg:path>`,
})
export class SolarSkateboardingRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundBoldDuotoneIcon],svg[solar-skateboarding-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.21 6.047a5.02 5.02 0 0 1 4.637-.357a1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516a3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-4.97 5.28a.75.75 0 1 0-1.06-1.06l-.622.621c-.476.477-.577.558-.682.602s-.234.057-.909.057H7a.75.75 0 0 0 0 1.5h1.361c.51 0 .961.002 1.379-.171c.417-.173.736-.493 1.095-.854l.074-.073z" opacity=".5"></svg:path>`,
})
export class SolarSkateboardingRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundBrokenIcon],svg[solar-skateboarding-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m3 17l.608.676A4 4 0 0 0 6.581 19H10m11-2l-.608.676A4 4 0 0 1 17.419 19H14"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-2.133a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736a4.27 4.27 0 0 0-3.943.304L8.5 8m2.5 6l-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3"></svg:path></svg:g>`,
})
export class SolarSkateboardingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundLineDuotoneIcon],svg[solar-skateboarding-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m3 17l.608.676A4 4 0 0 0 6.581 19H17.42a4 4 0 0 0 2.973-1.324L21 17"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-2.133a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736a4.27 4.27 0 0 0-3.943.304L8.5 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11 14l-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSkateboardingRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundLinearIcon],svg[solar-skateboarding-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m3 17l.608.676A4 4 0 0 0 6.581 19H17.42a4 4 0 0 0 2.973-1.324L21 17"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-2.133a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736a4.27 4.27 0 0 0-3.943.304L8.5 8m2.5 6l-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3"></svg:path></svg:g>`,
})
export class SolarSkateboardingRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundOutlineIcon],svg[solar-skateboarding-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.498 16.443a.75.75 0 0 1 1.06.055l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 2.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M16.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m-6.04 2.047a5.02 5.02 0 0 1 4.637-.357a1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516a3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM15.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-4.22 3.47a.75.75 0 0 1 0 1.06l-.621.622l-.074.073c-.359.36-.678.68-1.095.854c-.418.173-.87.172-1.379.171H7a.75.75 0 0 1 0-1.5h1.257c.675 0 .803-.013.909-.057s.206-.125.682-.602l.622-.621a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSkateboardingRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextBoldIcon],svg[solar-skip-next-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648zM22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarSkipNextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextBoldDuotoneIcon],svg[solar-skip-next-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648z"></svg:path>`,
})
export class SolarSkipNextBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextBrokenIcon],svg[solar-skip-next-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 11v7.967c0 2.31 2.134 3.769 3.87 2.648l10.79-6.968c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033V7m20-2v7m0 4v3"></svg:path>`,
})
export class SolarSkipNextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextLineDuotoneIcon],svg[solar-skip-next-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.66 9.353c1.787 1.154 1.787 4.14 0 5.294L5.87 21.614C4.135 22.737 2 21.277 2 18.968V5.033c0-2.31 2.134-3.769 3.87-2.648z"></svg:path><svg:path stroke-linecap="round" d="M22 5v14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSkipNextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextLinearIcon],svg[solar-skip-next-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.66 9.353c1.787 1.154 1.787 4.14 0 5.294L5.87 21.614C4.135 22.737 2 21.277 2 18.968V5.033c0-2.31 2.134-3.769 3.87-2.648z"></svg:path><svg:path stroke-linecap="round" d="M22 5v14"></svg:path></svg:g>`,
})
export class SolarSkipNextLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextOutlineIcon],svg[solar-skip-next-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.278 1.756c-1.143-.739-2.438-.622-3.417.048c-.967.66-1.611 1.841-1.611 3.229v13.934c0 1.388.644 2.568 1.61 3.23c.98.669 2.275.786 3.418.048l10.789-6.968c1.15-.742 1.683-2.043 1.683-3.277s-.533-2.535-1.683-3.277zM2.75 5.033c0-.921.423-1.625.958-1.991c.522-.358 1.162-.41 1.756-.026l10.789 6.967c.637.41.997 1.18.997 2.017c0 .836-.36 1.606-.997 2.017L5.464 20.985c-.594.383-1.234.33-1.756-.027c-.535-.365-.958-1.07-.958-1.99z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarSkipNextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousBoldIcon],svg[solar-skip-previous-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648zM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z"></svg:path>`,
})
export class SolarSkipPreviousBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousBoldDuotoneIcon],svg[solar-skip-previous-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648z"></svg:path>`,
})
export class SolarSkipPreviousBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousBrokenIcon],svg[solar-skip-previous-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 11v7.967c0 2.31-2.134 3.769-3.87 2.648L7.34 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968C19.865 1.264 22 2.724 22 5.033V7M2 5v7m0 7v-3"></svg:path>`,
})
export class SolarSkipPreviousBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousLineDuotoneIcon],svg[solar-skip-previous-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.34 9.353c-1.787 1.154-1.787 4.14 0 5.294l10.79 6.967c1.736 1.122 3.87-.338 3.87-2.647V5.033c0-2.31-2.134-3.769-3.87-2.648z"></svg:path><svg:path stroke-linecap="round" d="M2 5v14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSkipPreviousLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousLinearIcon],svg[solar-skip-previous-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.34 9.353c-1.787 1.154-1.787 4.14 0 5.294l10.79 6.967c1.736 1.122 3.87-.338 3.87-2.647V5.033c0-2.31-2.134-3.769-3.87-2.648z"></svg:path><svg:path stroke-linecap="round" d="M2 5v14"></svg:path></svg:g>`,
})
export class SolarSkipPreviousLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousOutlineIcon],svg[solar-skip-previous-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.14 1.804c.966.66 1.61 1.841 1.61 3.229v13.934c0 1.388-.644 2.568-1.61 3.23c-.98.669-2.275.786-3.418.048L6.933 15.277C5.783 14.535 5.25 13.235 5.25 12s.533-2.535 1.683-3.277l10.79-6.968c1.142-.738 2.437-.62 3.416.049m-.848 1.238c-.522-.358-1.162-.41-1.756-.026L7.747 9.983c-.637.41-.997 1.18-.997 2.017c0 .836.36 1.606.997 2.017l10.789 6.968c.594.383 1.234.33 1.756-.027c.535-.365.958-1.07.958-1.99V5.032c0-.921-.423-1.625-.958-1.991M2 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 2 4.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarSkipPreviousOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtBoldIcon],svg[solar-skirt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.108 2H7.892c-.969 0-1.453 0-1.754.293s-.3.764-.3 1.707v.75h12.324V4c0-.943 0-1.414-.3-1.707C17.56 2 17.077 2 16.108 2M2.08 17.953L5.612 6.25h3.423L7.147 21.407a1 1 0 0 0-.005.095C5.046 21.041 3.6 20.35 2.734 19.83c-.652-.391-.87-1.16-.653-1.876m6.512 3.812C9.606 21.912 10.74 22 12 22s2.393-.088 3.407-.235a1 1 0 0 1-.043-.172L13.454 6.25h-2.908l-1.91 15.343a1 1 0 0 1-.043.172M14.966 6.25l1.886 15.157a1 1 0 0 1 .006.096c2.096-.462 3.541-1.154 4.407-1.674c.653-.391.87-1.16.654-1.876L18.39 6.25z"></svg:path>`,
})
export class SolarSkirtBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtBoldDuotoneIcon],svg[solar-skirt-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.5h4l1.96 16.178A23.4 23.4 0 0 1 12 22c-1.495 0-2.813-.125-3.962-.322z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M5.838 5.5L2.08 17.953c-.216.716.001 1.485.654 1.876c.984.591 2.717 1.404 5.304 1.849L9.999 5.5z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M21.266 19.83c.652-.392.87-1.161.654-1.877L18.162 5.5H14l1.96 16.178c2.587-.444 4.32-1.258 5.306-1.849" opacity=".7"></svg:path><svg:path fill="currentColor" d="M16.109 2H7.892c-.968 0-1.452 0-1.753.293S5.838 3.057 5.838 4v1.5h12.325V4c0-.943 0-1.414-.301-1.707C17.562 2 17.077 2 16.109 2"></svg:path>`,
})
export class SolarSkirtBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtBrokenIcon],svg[solar-skirt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.08 17.953l-.717-.217zm19.84 0l.717-.217zM2.734 19.829l.385-.643zm18.53 0l-.385-.643zm-10.7-13.736a.75.75 0 1 0-1.488-.186zM7.148 21.407a.75.75 0 0 0 1.489.186zm7.776-15.5a.75.75 0 0 0-1.489.186zm.441 15.686a.75.75 0 0 0 1.488-.186zm4.572-12.81a.75.75 0 0 0-1.436.434zm-16.85 8.434a.75.75 0 1 0-1.436-.434zm-.23-4.434a.75.75 0 1 0 1.437.434zM7.893 2.75h8.216v-1.5H7.892zM17.412 4v1h1.5V4zm.25.75H5.838v1.5h11.824zM6.588 5.5V4h-1.5v1.5zm9.52-2.75c.505 0 .81.002 1.03.03a.8.8 0 0 1 .198.048l.002.002l1.047-1.074c-.314-.306-.693-.416-1.052-.463c-.34-.045-.761-.043-1.225-.043zM18.912 4c0-.45.002-.864-.044-1.2c-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003l.005.01a.7.7 0 0 1 .037.162c.029.21.03.502.03.995zM7.892 1.25c-.464 0-.885-.002-1.225.043c-.359.047-.738.157-1.052.463L6.662 2.83l.002-.002l.018-.008a.8.8 0 0 1 .18-.04c.22-.028.525-.03 1.03-.03zM6.588 4c0-.493.001-.786.03-.995a.7.7 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044c-.046.336-.044.75-.044 1.2zm-4.24 16.472c1.533.92 4.649 2.278 9.652 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064zM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017zM9.077 5.907l-1.93 15.5l1.489.186l1.93-15.5zm4.357.186l1.93 15.5l1.488-.186l-1.93-15.5zm9.203 11.643l-2.7-8.953l-1.437.434l2.701 8.952zM1.65 16.783l-.287.953l1.436.433l.287-.952zm3.47-11.5l-2.263 7.5l1.436.434l2.263-7.5zM17.412 5a.25.25 0 0 1 .25-.25v1.5c.69 0 1.25-.56 1.25-1.25z"></svg:path>`,
})
export class SolarSkirtBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtLineDuotoneIcon],svg[solar-skirt-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.162 5.5h-.75v.11l.032.107zm-12.324 0l.718.217l.032-.106V5.5zM2.08 17.953l-.718-.217zm19.838 0l.718-.217zM2.735 19.829l.385-.643zm18.53 0l-.385-.643zM7.893 2.75h8.216v-1.5H7.892zM17.412 4v1.5h1.5V4zM6.588 5.5V4h-1.5v1.5zm9.52-2.75c.505 0 .81.002 1.03.03a.8.8 0 0 1 .198.048l.002.002l1.047-1.074c-.314-.306-.693-.416-1.052-.463c-.34-.045-.761-.043-1.225-.043zM18.912 4c0-.45.002-.864-.044-1.2c-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003l.005.01a.7.7 0 0 1 .037.162c.029.21.03.502.03.995zM7.892 1.25c-.464 0-.885-.002-1.225.043c-.359.047-.738.157-1.052.463L6.662 2.83l.002-.002l.018-.008a.8.8 0 0 1 .18-.04c.22-.028.525-.03 1.03-.03zM6.588 4c0-.493.001-.786.03-.995a.7.7 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044c-.046.336-.044.75-.044 1.2zM5.12 5.283L1.363 17.736l1.436.433L6.556 5.717zm17.517 12.453L18.881 5.283l-1.437.434l3.757 12.453zM2.35 20.472c1.532.92 4.648 2.278 9.651 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064zM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017z"></svg:path><svg:path fill="currentColor" d="M10.566 6.093a.75.75 0 1 0-1.489-.186zM7.147 21.407a.75.75 0 0 0 1.489.186zm7.776-15.5a.75.75 0 0 0-1.489.186zm.44 15.686a.75.75 0 0 0 1.49-.186zM9.078 5.907l-1.93 15.5l1.489.186l1.93-15.5zm4.357.186l1.93 15.5l1.488-.186l-1.93-15.5zm4.729-1.343H5.838v1.5h12.325z" opacity=".5"></svg:path>`,
})
export class SolarSkirtLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtLinearIcon],svg[solar-skirt-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.08 17.953l-.717-.217zm19.84 0l.717-.217zM2.734 19.829l.385-.643zm18.53 0l-.385-.643zM10.744 5.598a.75.75 0 0 0-1.488-.196zM7.148 21.402a.75.75 0 1 0 1.487.196zm7.596-16a.75.75 0 0 0-1.488.196zm.62 16.196a.75.75 0 0 0 1.488-.196zM7.893 2.75h8.216v-1.5H7.892zM17.412 4v1.5h1.5V4zm.75.75H5.838v1.5h12.324zM6.588 5.5V4h-1.5v1.5zm9.52-2.75c.505 0 .81.002 1.03.03a.8.8 0 0 1 .198.048l.002.002l1.047-1.074c-.314-.306-.693-.416-1.052-.463c-.34-.045-.761-.043-1.225-.043zM18.912 4c0-.45.002-.864-.044-1.2c-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003l.005.01a.7.7 0 0 1 .037.162c.029.21.03.502.03.995zM7.892 1.25c-.464 0-.885-.002-1.225.043c-.359.047-.738.157-1.052.463L6.662 2.83l.002-.002l.018-.008a.8.8 0 0 1 .18-.04c.22-.028.525-.03 1.03-.03zM6.588 4c0-.493.001-.786.03-.995a.7.7 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044c-.046.336-.044.75-.044 1.2zM5.12 5.283L1.363 17.736l1.436.433L6.556 5.717zm17.517 12.453L18.881 5.283l-1.437.434l3.757 12.453zM2.35 20.472c1.532.92 4.648 2.278 9.651 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064zM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017zM9.256 5.402l-2.108 16l1.487.196l2.109-16zm4 .196l2.109 16l1.487-.196l-2.108-16z"></svg:path>`,
})
export class SolarSkirtLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtOutlineIcon],svg[solar-skirt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.847 1.25h8.305c.446 0 .852 0 1.18.043c.36.047.739.157 1.053.463c.316.308.433.685.483 1.044c.044.324.044.722.044 1.154V5.39l3.725 12.347c.296.982.014 2.136-.986 2.736c-1.532.92-4.648 2.278-9.651 2.278s-8.119-1.358-9.652-2.278c-1-.6-1.282-1.755-.986-2.736L5.087 5.39V3.954c0-.432 0-.83.045-1.154c.05-.36.166-.736.483-1.044c.314-.306.693-.416 1.052-.463c.329-.043.734-.043 1.18-.043m-1.453 5L2.8 18.17c-.136.45.017.833.321 1.016c.79.474 2.135 1.124 4.109 1.567L9.034 6.25zm4.152 0l-1.84 14.774c.977.14 2.073.226 3.294.226c1.22 0 2.317-.085 3.293-.226L13.453 6.25zm4.42 0l1.805 14.503c1.973-.443 3.319-1.093 4.108-1.567c.305-.183.458-.566.322-1.017L17.605 6.25zm2.446-1.5V4c0-.493-.001-.786-.03-.995a.7.7 0 0 0-.038-.162l-.004-.01l-.001-.002l-.003-.003l-.018-.008a.8.8 0 0 0-.18-.04c-.22-.028-.525-.03-1.03-.03H7.892c-.505 0-.81.002-1.03.03a.8.8 0 0 0-.198.048l-.003.002l-.001.003l-.005.01a.7.7 0 0 0-.037.162c-.029.21-.03.502-.03.995v.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSkirtOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleBoldIcon],svg[solar-slash-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.018-14.635a.75.75 0 1 0-1.448-.389l-2.589 9.66a.75.75 0 0 0 1.45.388z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSlashCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleBoldDuotoneIcon],svg[solar-slash-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.019 7.364a.75.75 0 0 0-1.449-.388l-2.588 9.66a.75.75 0 0 0 1.449.388z"></svg:path>`,
})
export class SolarSlashCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleBrokenIcon],svg[solar-slash-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSlashCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleLineDuotoneIcon],svg[solar-slash-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarSlashCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleLinearIcon],svg[solar-slash-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarSlashCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleOutlineIcon],svg[solar-slash-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.018 7.365a.75.75 0 1 0-1.449-.389l-2.588 9.66a.75.75 0 1 0 1.45.388z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSlashCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareBoldIcon],svg[solar-slash-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m10.554 3.9a.75.75 0 1 0-1.448-.388l-2.589 9.66a.75.75 0 0 0 1.45.388z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSlashSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareBoldDuotoneIcon],svg[solar-slash-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.018 7.364a.75.75 0 1 0-1.449-.388l-2.588 9.66a.75.75 0 0 0 1.449.388z"></svg:path>`,
})
export class SolarSlashSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareBrokenIcon],svg[solar-slash-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSlashSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareLineDuotoneIcon],svg[solar-slash-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSlashSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareLinearIcon],svg[solar-slash-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13.294 7.17L12 12l-1.294 4.83"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSlashSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareOutlineIcon],svg[solar-slash-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.018 7.365a.75.75 0 1 0-1.449-.389l-2.588 9.66a.75.75 0 1 0 1.45.388z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarSlashSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerBoldIcon],svg[solar-sledgehammer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.604 4.604C9.34 2.868 10.208 2 11.286 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419c1.735 1.735 2.603 2.603 2.603 3.682s-.868 1.946-2.604 3.682s-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.869 10.233 5 9.365 5 8.286s.868-1.946 2.604-3.682m-.32 9.166l-4.458 4.458c-.343.343-.514.514-.617.692a1.56 1.56 0 0 0 0 1.562c.103.178.274.35.617.692s.513.514.692.617a1.56 1.56 0 0 0 1.562 0c.178-.103.35-.275.692-.617l4.458-4.458z"></svg:path><svg:path fill="currentColor" d="m8.345 12.71l.004-.005l2.946 2.946l-.005.004zm11.324-5.527a1.56 1.56 0 0 0-.024-1.52c-.103-.178-.275-.349-.617-.691c-.342-.343-.514-.514-.692-.617a1.56 1.56 0 0 0-1.519-.024z"></svg:path>`,
})
export class SolarSledgehammerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerBoldDuotoneIcon],svg[solar-sledgehammer-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.604 4.604C9.34 2.868 10.208 2 11.286 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419c1.735 1.735 2.603 2.603 2.603 3.682s-.868 1.946-2.604 3.682s-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.869 10.233 5 9.365 5 8.286s.868-1.946 2.604-3.682"></svg:path><svg:path fill="currentColor" d="m8.345 12.71l-5.52 5.518c-.342.343-.513.514-.616.692a1.56 1.56 0 0 0 0 1.562c.103.178.274.35.617.692s.513.514.692.617a1.56 1.56 0 0 0 1.562 0c.178-.103.35-.275.692-.617l5.518-5.519zm10.31-4.42l.373-.372c.342-.343.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.179-.275-.35-.617-.692c-.342-.343-.514-.514-.692-.617a1.56 1.56 0 0 0-1.562 0c-.178.103-.35.274-.692.617l-.373.373z" opacity=".5"></svg:path>`,
})
export class SolarSledgehammerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerBrokenIcon],svg[solar-sledgehammer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.66 8.286l.368-.368c.342-.343.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.178-.275-.35-.617-.692s-.514-.514-.692-.616a1.56 1.56 0 0 0-1.562 0c-.178.102-.35.274-.692.616l-.368.368m-4.419 10.31l-5.523 5.524c-.343.343-.514.514-.692.617a1.56 1.56 0 0 1-1.562 0c-.179-.103-.35-.274-.692-.617c-.343-.342-.514-.514-.617-.692a1.56 1.56 0 0 1 0-1.562c.103-.178.274-.35.617-.692l5.523-5.523M18 17.75c-.898.827-1.542 1.24-2.286 1.24c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.878 10.233 5.01 9.365 5.01 8.286s.868-1.946 2.604-3.682S10.217 2 11.295 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419C21.131 10.758 22 11.626 22 12.705c0 .747-.416 1.392-1.248 2.295"></svg:path>`,
})
export class SolarSledgehammerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerLineDuotoneIcon],svg[solar-sledgehammer-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.613 4.604C9.349 2.868 10.217 2 11.295 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419C21.131 10.758 22 11.626 22 12.705s-.868 1.946-2.604 3.682s-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.878 10.233 5.01 9.365 5.01 8.286s.868-1.946 2.604-3.682Z"></svg:path><svg:path d="m11.295 15.65l-5.523 5.524c-.343.343-.514.514-.692.617a1.56 1.56 0 0 1-1.562 0c-.179-.103-.35-.274-.692-.617c-.343-.342-.514-.513-.617-.691a1.56 1.56 0 0 1 0-1.563c.103-.178.274-.349.617-.692l5.523-5.523M18.66 8.286l.368-.368c.342-.343.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.179-.275-.35-.617-.692c-.342-.343-.514-.514-.692-.617a1.56 1.56 0 0 0-1.562 0c-.178.103-.35.274-.692.617l-.368.368" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSledgehammerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerLinearIcon],svg[solar-sledgehammer-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m18.66 8.286l.368-.368c.342-.343.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.178-.275-.35-.617-.692s-.514-.514-.692-.616a1.56 1.56 0 0 0-1.562 0c-.178.102-.35.274-.692.616l-.368.368m-4.419 10.31l-5.523 5.524c-.343.343-.514.514-.692.617a1.56 1.56 0 0 1-1.562 0c-.179-.103-.35-.274-.692-.617c-.343-.342-.514-.514-.617-.692a1.56 1.56 0 0 1 0-1.562c.103-.178.274-.35.617-.692l5.523-5.523m-.736-.737l4.419 4.42c1.735 1.735 2.603 2.603 3.682 2.603s1.946-.868 3.682-2.604S22 13.783 22 12.705c0-1.079-.868-1.947-2.604-3.682l-4.419-4.42C13.242 2.869 12.374 2 11.295 2s-1.946.868-3.682 2.604s-2.604 2.604-2.604 3.682c0 1.079.868 1.947 2.604 3.682Z"></svg:path>`,
})
export class SolarSledgehammerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerOutlineIcon],svg[solar-sledgehammer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.155 3.247c-.519.396-1.129 1.004-2.012 1.887s-1.49 1.493-1.887 2.012c-.383.502-.497.83-.497 1.14s.114.638.497 1.14c.397.52 1.004 1.13 1.887 2.012l4.419 4.419c.883.883 1.493 1.49 2.012 1.887c.502.383.83.497 1.14.497s.638-.114 1.14-.497c.519-.396 1.129-1.004 2.012-1.887s1.49-1.493 1.887-2.012c.383-.503.497-.83.497-1.14s-.114-.638-.497-1.14c-.396-.52-1.004-1.13-1.887-2.012l-4.419-4.419c-.883-.883-1.493-1.49-2.012-1.887c-.502-.383-.83-.497-1.14-.497s-.637.114-1.14.497m-.91-1.192c.636-.485 1.28-.805 2.05-.805s1.414.32 2.05.805c.609.464 1.29 1.145 2.125 1.98l.244.245c.239-.238.451-.44.685-.574a2.31 2.31 0 0 1 2.312 0c.267.154.505.393.787.675l.06.06l.061.061c.282.282.521.52.675.787a2.31 2.31 0 0 1 0 2.312c-.135.234-.336.446-.574.685l.245.244c.835.836 1.516 1.516 1.98 2.125c.485.636.805 1.28.805 2.05s-.32 1.414-.805 2.05c-.464.608-1.145 1.289-1.98 2.124l-.077.077c-.835.835-1.516 1.516-2.125 1.98c-.635.485-1.28.805-2.05.805c-.768 0-1.413-.32-2.049-.805c-.609-.464-1.29-1.145-2.125-1.98l-.244-.245l-4.993 4.994l-.06.06c-.282.282-.52.521-.787.675a2.31 2.31 0 0 1-2.312 0c-.267-.154-.505-.393-.787-.675l-.06-.06l-.061-.061c-.282-.282-.521-.52-.675-.787a2.31 2.31 0 0 1 0-2.312c.154-.266.393-.505.675-.786l.06-.061l4.994-4.993l-.245-.244c-.835-.836-1.516-1.516-1.98-2.125c-.485-.636-.805-1.28-.805-2.05s.32-1.414.805-2.05c.464-.608 1.145-1.289 1.98-2.124l.077-.077c.835-.835 1.516-1.516 2.125-1.98m-.896 11.71L3.356 18.76c-.376.376-.456.465-.497.536a.81.81 0 0 0 0 .812c.04.072.12.16.497.537c.377.376.466.456.537.497a.81.81 0 0 0 .812 0c.07-.04.16-.12.536-.497l4.994-4.993zm10.31-6.54c.24-.243.302-.314.336-.374a.81.81 0 0 0 0-.812c-.041-.071-.12-.16-.497-.537c-.377-.376-.466-.456-.537-.497a.81.81 0 0 0-.812 0c-.06.034-.131.096-.374.336z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSledgehammerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingBoldIcon],svg[solar-sleeping-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.392V18a.75.75 0 0 0 1.5 0v-2.357c0-1.995 0-2.992-.28-3.794a5 5 0 0 0-3.068-3.068c-.802-.28-1.8-.28-3.794-.28h-.002c-.798 0-1.838 0-2.159.111a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893H2.75z"></svg:path><svg:path fill="currentColor" d="M7 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class SolarSleepingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingBoldDuotoneIcon],svg[solar-sleeping-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.25a.75.75 0 0 1 .75.75v9.25h19.893v.393l-.001.357v2a.75.75 0 1 1-1.5 0v-1.25H2.75V18a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 2 5.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15.362-1.651a5 5 0 0 0-3.068-3.068c-.802-.281-1.8-.281-3.794-.281h-.002c-.798 0-1.838 0-2.159.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893h10.643c-.001-1.737-.02-2.654-.28-3.401" opacity=".5"></svg:path>`,
})
export class SolarSleepingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingBrokenIcon],svg[solar-sleeping-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 6v12m20-2v2m-10-2v-4.643c0-.798 0-1.197.112-1.518a2 2 0 0 1 1.227-1.227c.321-.112.72-.112 1.518-.112c1.995 0 2.992 0 3.794.28a5 5 0 0 1 3.068 3.069M2 16h20"></svg:path><svg:path d="M9.5 11A2.5 2.5 0 1 0 7 13.5"></svg:path></svg:g>`,
})
export class SolarSleepingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleBoldIcon],svg[solar-sleeping-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264l.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z"></svg:path><svg:path d="M13.285 3.262a2.253 2.253 0 0 0-2.483 2.096a2.25 2.25 0 0 0-.724 2.96c.194.352.482.653.845.863l1.732 1a2.25 2.25 0 0 0 3.357-1.662a2.25 2.25 0 0 0 3.113.894l.976-.563A10 10 0 0 1 21 13c0 5.523-4.477 10-10 10S1 18.523 1 13S5.477 3 11 3q1.18.002 2.285.262m-7.839 7.99a.75.75 0 0 1 .612.246c.464.518.964.752 1.442.752c.297 0 .604-.09.904-.284q.275-.175.538-.468a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248s-1.889-.505-2.558-1.248a.75.75 0 0 1 .504-1.25m7.612.246a.75.75 0 1 0-1.116 1.004c.67.743 1.548 1.248 2.558 1.248s1.889-.505 2.558-1.248a.75.75 0 0 0-1.116-1.004c-.465.518-.965.752-1.442.752s-.977-.234-1.442-.752M12 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarSleepingCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleBoldDuotoneIcon],svg[solar-sleeping-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 23c5.523 0 10-4.477 10-10S16.523 3 11 3S1 7.477 1 13s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264l.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m.999-6.558a.75.75 0 0 1 1.059.056c.465.517.965.752 1.442.752s.977-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06m-5.94.057A.75.75 0 1 0 4.942 12.5c.67.744 1.548 1.249 2.558 1.249s1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.464.517-.965.752-1.442.752s-.977-.235-1.442-.751"></svg:path>`,
})
export class SolarSleepingCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleBrokenIcon],svg[solar-sleeping-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5"></svg:path></svg:g>`,
})
export class SolarSleepingCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleLineDuotoneIcon],svg[solar-sleeping-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarSleepingCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleLinearIcon],svg[solar-sleeping-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path></svg:g>`,
})
export class SolarSleepingCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleOutlineIcon],svg[solar-sleeping-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.92 1.405a.75.75 0 0 1 .268.79l-.995 3.714l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715l-1.896 1.095a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 .832.055M12 2.75A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12S6.063 1.25 12 1.25a.75.75 0 0 1 0 1.5m1.398 2.375a.75.75 0 0 1 1.025-.275l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264l.164.095a.75.75 0 0 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264l-.164-.094a.75.75 0 0 1-.275-1.025m-7.4 5.317a.75.75 0 0 1 1.06.056c.464.517.965.752 1.442.752s.978-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06m7 0a.75.75 0 0 1 1.06.056c.465.517.965.752 1.442.752s.977-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSleepingCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingLineDuotoneIcon],svg[solar-sleeping-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 6v12m20 0v-2.357c0-1.995 0-2.993-.28-3.794a5 5 0 0 0-3.07-3.069c-.8-.28-1.798-.28-3.793-.28c-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"></svg:path><svg:path d="M9.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSleepingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingLinearIcon],svg[solar-sleeping-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 6v12m20 0v-2.357c0-1.995 0-2.993-.28-3.794a5 5 0 0 0-3.07-3.069c-.8-.28-1.798-.28-3.793-.28c-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"></svg:path><svg:path d="M9.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path></svg:g>`,
})
export class SolarSleepingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingOutlineIcon],svg[solar-sleeping-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.5V18a.75.75 0 0 0 1.5 0v-2.531c0-1.828 0-2.944-.323-3.868A5.75 5.75 0 0 0 18.9 8.073c-.924-.324-2.04-.323-3.868-.323h-.3c-.673 0-1.195-.001-1.64.154a2.75 2.75 0 0 0-1.687 1.688c-.155.444-.155.966-.154 1.64v4.018h-8.5zm18.5 9.25h-8.5v-3.893c0-.86.01-1.1.07-1.27a1.25 1.25 0 0 1 .767-.767c.17-.06.41-.07 1.27-.07c2.058 0 2.895.01 3.547.239a4.25 4.25 0 0 1 2.608 2.607c.212.608.236 1.38.238 3.154"></svg:path><svg:path d="M7 7.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M5.25 11a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"></svg:path></svg:g>`,
})
export class SolarSleepingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareBoldIcon],svg[solar-sleeping-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264l.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z"></svg:path><svg:path d="M13.975 3.02q-.087.18-.141.371a2.25 2.25 0 0 0-3.032 1.968a2.25 2.25 0 0 0 .12 3.822l1.733 1a2.25 2.25 0 0 0 3.357-1.663a2.25 2.25 0 0 0 3.113.894l1.782-1.028C21 9.61 21 11.116 21 13c0 4.714 0 7.071-1.465 8.535C18.072 23 15.715 23 11 23s-7.071 0-8.536-1.465C1 20.072 1 17.714 1 13s0-7.071 1.464-8.536C3.93 3 6.286 3 11 3c1.117 0 2.103 0 2.975.02m-.917 8.479a.75.75 0 1 0-1.116 1.002c.67.744 1.548 1.249 2.558 1.249s1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.465.517-.965.752-1.442.752s-.977-.235-1.442-.751m-8.06-.057a.75.75 0 0 1 1.06.056c.465.517.965.752 1.442.752s.978-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06M12 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarSleepingSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareBoldDuotoneIcon],svg[solar-sleeping-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.464 21.536C3.93 23 6.286 23 11 23s7.071 0 8.535-1.465C21 20.072 21 17.714 21 13s0-7.071-1.465-8.536C18.072 3 15.715 3 11 3S3.929 3 2.464 4.464C1 5.93 1 8.286 1 13s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264l.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2m.999-6.558a.75.75 0 0 1 1.059.056c.465.517.965.752 1.442.752s.977-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06m-5.94.057A.75.75 0 1 0 4.942 12.5c.67.744 1.548 1.249 2.558 1.249s1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.464.517-.965.752-1.442.752s-.977-.235-1.442-.751"></svg:path>`,
})
export class SolarSleepingSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareBrokenIcon],svg[solar-sleeping-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m10 10c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path></svg:g>`,
})
export class SolarSleepingSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareLineDuotoneIcon],svg[solar-sleeping-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path></svg:g>`,
})
export class SolarSleepingSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareLinearIcon],svg[solar-sleeping-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"></svg:path><svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 4l3.464-2L19 7.464l3.464-2m-8.416.036l1.732 1l-2.732.732l1.732 1"></svg:path></svg:g>`,
})
export class SolarSleepingSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareOutlineIcon],svg[solar-sleeping-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.92 1.405a.75.75 0 0 1 .268.79l-.995 3.714l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715l-1.896 1.095a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 .832.055m-8.977-.155H12a.75.75 0 0 1 0 1.5c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386a.75.75 0 0 1 1.5 0v.057c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m1.456 3.875a.75.75 0 0 1 1.024-.275l1.732 1a.75.75 0 0 1-.18 1.374l-.984.264l.164.094a.75.75 0 0 1-.75 1.3l-1.732-1a.75.75 0 0 1 .18-1.375l.984-.263l-.164-.095a.75.75 0 0 1-.274-1.024m-7.4 5.317a.75.75 0 0 1 1.059.056c.464.517.965.752 1.442.752s.978-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06m7 0a.75.75 0 0 1 1.059.056c.465.517.965.752 1.442.752s.977-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSleepingSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalBoldIcon],svg[solar-slider-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6.419c2.828 0 4.243 0 5.121.817S22 9.369 22 12s0 3.947-.879 4.764c-.878.817-2.293.817-5.121.817H8c-2.828 0-4.243 0-5.121-.817S2 14.631 2 12s0-3.947.879-4.764c.878-.817 2.293-.817 5.121-.817zm.099-1.396H7.9c-.983 0-1.865 0-2.629.046q-.404.025-.764.069a8 8 0 0 0-.32.046c-.217.036-.42-.131-.401-.35c.037-.43.118-.82.317-1.183a3.15 3.15 0 0 1 1.42-1.321c.391-.186.81-.26 1.273-.296C7.245 2 7.795 2 8.469 2h7.062c.674 0 1.225 0 1.672.034c.463.035.882.11 1.273.296c.611.29 1.108.752 1.42 1.32c.199.364.28.753.317 1.184c.02.219-.184.386-.4.35a8 8 0 0 0-.321-.046q-.36-.044-.764-.069c-.764-.046-1.647-.046-2.63-.046M7.901 18.977H16.1c.982 0 1.865 0 2.629-.047q.405-.023.764-.068q.16-.02.32-.046c.217-.036.42.131.401.35c-.037.43-.118.82-.317 1.183a3.15 3.15 0 0 1-1.42 1.322c-.391.185-.81.26-1.273.295c-.447.034-.998.034-1.672.034H8.47c-.674 0-1.225 0-1.672-.034c-.463-.035-.882-.11-1.272-.296a3.15 3.15 0 0 1-1.42-1.32c-.2-.364-.28-.753-.318-1.184c-.02-.219.184-.386.4-.35q.16.026.321.046q.36.044.764.069c.764.046 1.646.046 2.63.046"></svg:path>`,
})
export class SolarSliderHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalBoldDuotoneIcon],svg[solar-slider-horizontal-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"></svg:path><svg:path fill="currentColor" d="M4.5 17.859C5.343 18 6.462 18 8 18h8c1.538 0 2.657 0 3.5-.141V18c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.6 22 16.9 22 15.5 22h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C4.5 20.1 4.5 19.4 4.5 18zm0-11.718C5.343 6 6.462 6 8 6h8c1.538 0 2.657 0 3.5.141V6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C4.5 3.9 4.5 4.6 4.5 6z" opacity=".5"></svg:path>`,
})
export class SolarSliderHorizontalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalBrokenIcon],svg[solar-slider-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.5 6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C4.5 3.9 4.5 4.6 4.5 6m15 12c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.6 22 16.9 22 15.5 22h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C4.5 20.1 4.5 19.4 4.5 18"></svg:path><svg:path stroke-linecap="round" d="M8 6c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h8c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6h-4"></svg:path></svg:g>`,
})
export class SolarSliderHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalLineDuotoneIcon],svg[solar-slider-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"></svg:path><svg:path d="M19.5 6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C4.5 3.9 4.5 4.6 4.5 6m15 12c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.6 22 16.9 22 15.5 22h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C4.5 20.1 4.5 19.4 4.5 18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSliderHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalLinearIcon],svg[solar-slider-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18zM19.5 6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C4.5 3.9 4.5 4.6 4.5 6m15 12c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.6 22 16.9 22 15.5 22h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C4.5 20.1 4.5 19.4 4.5 18"></svg:path>`,
})
export class SolarSliderHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalOutlineIcon],svg[solar-slider-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.787 4.297c-.029.35-.035.761-.037 1.246c-.533.157-1.002.405-1.402.805c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.4.4.869.648 1.402.805c.002.485.008.897.037 1.246c.037.463.118.882.317 1.273a3.25 3.25 0 0 0 1.42 1.42c.391.199.81.28 1.273.317c.448.037.998.037 1.672.037h7.062c.674 0 1.225 0 1.672-.037c.463-.037.882-.118 1.273-.317a3.25 3.25 0 0 0 1.42-1.42c.199-.391.28-.81.317-1.273c.029-.35.035-.761.037-1.246c.533-.157 1.002-.405 1.402-.805c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.4-.4-.869-.648-1.402-.805a17 17 0 0 0-.037-1.246c-.037-.463-.118-.882-.317-1.272a3.25 3.25 0 0 0-1.42-1.42c-.391-.2-.81-.28-1.273-.318c-.447-.037-.998-.037-1.672-.037H8.47c-.674 0-1.225 0-1.672.037c-.463.037-.882.118-1.272.317a3.25 3.25 0 0 0-1.42 1.42c-.2.391-.28.81-.318 1.273M17.08 2.782c-.38-.031-.869-.032-1.581-.032h-7c-.712 0-1.202 0-1.58.032c-.371.03-.57.085-.714.159a1.75 1.75 0 0 0-.765.765c-.074.144-.13.343-.16.713c-.02.24-.027.526-.03.884c.751-.053 1.645-.053 2.694-.053h8.11c1.05 0 1.943 0 2.693.053a12 12 0 0 0-.03-.884c-.03-.37-.085-.57-.159-.713a1.75 1.75 0 0 0-.765-.765c-.144-.074-.343-.13-.713-.16m1.667 15.915c-.75.053-1.644.053-2.693.053h-8.11c-1.05 0-1.943 0-2.693-.053c.002.358.01.643.03.884c.03.37.085.57.159.713c.168.33.435.598.765.765c.144.074.343.13.713.16c.38.03.869.031 1.581.031h7c.712 0 1.202 0 1.58-.032c.371-.03.57-.085.715-.159a1.75 1.75 0 0 0 .764-.765c.074-.144.13-.343.16-.713c.02-.24.026-.526.03-.884m.444-11.844c-.756-.101-1.757-.103-3.192-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556" clip-rule="evenodd"></svg:path>`,
})
export class SolarSliderHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalBoldIcon],svg[solar-slider-minimalistic-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.846c2.828 0 4.243 0 5.121.901C22 7.65 22 9.1 22 12s0 4.351-.879 5.253c-.878.9-2.293.9-5.121.9H8c-2.828 0-4.243 0-5.121-.9C2 16.35 2 14.9 2 12s0-4.351.879-5.253c.878-.9 2.293-.9 5.121-.9z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.25 2.77a.76.76 0 0 1-.75.768h-15a.76.76 0 0 1-.75-.769A.76.76 0 0 1 4.5 2h15a.76.76 0 0 1 .75.77m0 18.46a.76.76 0 0 1-.75.77h-15a.76.76 0 0 1-.75-.77a.76.76 0 0 1 .75-.768h15a.76.76 0 0 1 .75.769" clip-rule="evenodd"></svg:path>`,
})
export class SolarSliderMinimalisticHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalBoldDuotoneIcon],svg[solar-slider-minimalistic-horizontal-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.25 2.77a.76.76 0 0 1-.75.768h-15a.76.76 0 0 1-.75-.769A.76.76 0 0 1 4.5 2h15a.76.76 0 0 1 .75.77m0 18.46a.76.76 0 0 1-.75.77h-15a.76.76 0 0 1-.75-.77a.76.76 0 0 1 .75-.768h15a.76.76 0 0 1 .75.769" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 5.846c2.828 0 4.243 0 5.121.901C22 7.65 22 9.1 22 12s0 4.352-.879 5.253c-.878.9-2.293.9-5.121.9H8c-2.828 0-4.243 0-5.121-.9C2 16.352 2 14.9 2 12s0-4.351.879-5.253c.878-.9 2.293-.9 5.121-.9z"></svg:path>`,
})
export class SolarSliderMinimalisticHorizontalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalBrokenIcon],svg[solar-slider-minimalistic-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.5 3h15m-15 18h15M8 6c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h8c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6h-4"></svg:path>`,
})
export class SolarSliderMinimalisticHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalLineDuotoneIcon],svg[solar-slider-minimalistic-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"></svg:path><svg:path stroke-linecap="round" d="M4.5 3h15m-15 18h15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSliderMinimalisticHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalLinearIcon],svg[solar-slider-minimalistic-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18z"></svg:path><svg:path stroke-linecap="round" d="M4.5 3h15m-15 18h15"></svg:path></svg:g>`,
})
export class SolarSliderMinimalisticHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalOutlineIcon],svg[solar-slider-minimalistic-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.392 5.367c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h8.11c1.367 0 2.47 0 3.337.117m-.2 1.486c-.756-.101-1.757-.103-3.192-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.5 21.75a.75.75 0 0 1 0-1.5h15a.75.75 0 0 1 0 1.5z"></svg:path>`,
})
export class SolarSliderMinimalisticHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalBoldIcon],svg[solar-slider-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.419 8c0-2.828 0-4.243.817-5.121S9.369 2 12 2s3.947 0 4.764.879c.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121S14.631 22 12 22s-3.947 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm-1.396-.099V16.1c0 .982 0 1.865.046 2.629q.025.405.069.764q.02.16.046.32c.036.217-.131.42-.35.401c-.43-.037-.82-.118-1.183-.317a3.15 3.15 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672c.035-.463.11-.882.296-1.272a3.15 3.15 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318c.219-.02.386.184.35.4a8 8 0 0 0-.046.321q-.044.36-.069.764c-.046.764-.046 1.646-.046 2.63m13.954 8.196V7.9c0-.983 0-1.865-.047-2.629q-.023-.404-.068-.764a8 8 0 0 0-.046-.32c-.036-.217.131-.42.35-.401c.43.037.82.118 1.183.317a3.15 3.15 0 0 1 1.322 1.42c.185.391.26.81.295 1.273c.034.448.034.998.034 1.672v7.062c0 .674 0 1.225-.034 1.672c-.035.463-.11.882-.296 1.273a3.15 3.15 0 0 1-1.32 1.42c-.364.199-.753.28-1.184.317c-.219.02-.386-.184-.35-.4q.026-.16.046-.321q.044-.36.069-.764c.046-.764.046-1.647.046-2.63"></svg:path>`,
})
export class SolarSliderVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalBoldDuotoneIcon],svg[solar-slider-vertical-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2s4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></svg:path><svg:path fill="currentColor" d="M6.141 4.5C6 5.343 6 6.462 6 8v8c0 1.538 0 2.657.141 3.5H6c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 4.5 4.6 4.5 6 4.5zm11.718 0C18 5.343 18 6.462 18 8v8c0 1.538 0 2.657-.141 3.5H18c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.6 22 16.9 22 15.5v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 4.5 19.4 4.5 18 4.5z" opacity=".5"></svg:path>`,
})
export class SolarSliderVerticalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalBrokenIcon],svg[solar-slider-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4"></svg:path><svg:path d="M18 19.5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.6 22 16.9 22 15.5v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 4.5 19.4 4.5 18 4.5m-12 15c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 4.5 4.6 4.5 6 4.5"></svg:path></svg:g>`,
})
export class SolarSliderVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalLineDuotoneIcon],svg[solar-slider-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2s4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></svg:path><svg:path d="M18 19.5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.6 22 16.9 22 15.5v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 4.5 19.4 4.5 18 4.5m-12 15c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 4.5 4.6 4.5 6 4.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSliderVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalLinearIcon],svg[solar-slider-vertical-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2s4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16zm12 11.5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.6 22 16.9 22 15.5v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 4.5 19.4 4.5 18 4.5m-12 15c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 4.5 4.6 4.5 6 4.5"></svg:path>`,
})
export class SolarSliderVerticalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticBoldIcon],svg[solar-slider-vertical-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2s4.351 0 5.253.879c.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.35 22 14.9 22 12 22s-4.351 0-5.253-.879c-.9-.878-.9-2.293-.9-5.121z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75m18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75a.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticBoldDuotoneIcon],svg[solar-slider-vertical-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2s4.352 0 5.253.879c.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.352 22 14.9 22 12 22s-4.351 0-5.253-.879c-.9-.878-.9-2.293-.9-5.121z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75m18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75a.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticBrokenIcon],svg[solar-slider-vertical-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 8c0-2.828 0-4.243-.879-5.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6 3.757 6 5.172 6 8v8c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879C18 20.243 18 18.828 18 16v-4m3-7.5v15M3 4.5v15"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticLineDuotoneIcon],svg[solar-slider-vertical-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2s4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></svg:path><svg:path stroke-linecap="round" d="M21 4.5v15M3 4.5v15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSliderVerticalMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticLinearIcon],svg[solar-slider-vertical-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2s4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></svg:path><svg:path stroke-linecap="round" d="M21 4.5v15M3 4.5v15"></svg:path></svg:g>`,
})
export class SolarSliderVerticalMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticOutlineIcon],svg[solar-slider-vertical-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M8.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C6.752 5.562 6.75 6.564 6.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103s2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103s-2.437.002-3.192.103" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21 3.75a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75M2.25 4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalOutlineIcon],svg[solar-slider-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.4.4.648.869.805 1.402c.485.002.897.008 1.246.037c.463.037.882.118 1.273.317a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.317 1.273c.037.448.037.998.037 1.672v7.062c0 .674 0 1.225-.037 1.672c-.037.463-.118.882-.317 1.273a3.25 3.25 0 0 1-1.42 1.42c-.391.199-.81.28-1.273.317c-.35.029-.761.035-1.246.037c-.157.533-.405 1.002-.805 1.402c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.4-.4-.648-.869-.805-1.402a17 17 0 0 1-1.246-.037c-.463-.037-.882-.118-1.272-.317a3.25 3.25 0 0 1-1.42-1.42c-.2-.391-.28-.81-.318-1.273c-.037-.447-.037-.998-.037-1.672V8.47c0-.674 0-1.224.037-1.672c.037-.463.118-.882.317-1.272a3.25 3.25 0 0 1 1.42-1.42c.391-.2.81-.28 1.273-.318c.35-.029.761-.035 1.246-.037c.157-.533.405-1.002.805-1.402c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M5.303 5.252c-.358.002-.643.01-.884.03c-.37.03-.57.085-.713.159a1.75 1.75 0 0 0-.765.765c-.074.144-.13.343-.16.713c-.03.38-.031.869-.031 1.581v7c0 .712 0 1.202.032 1.58c.03.371.085.57.159.715c.168.329.435.596.765.764c.144.074.343.13.713.16c.24.02.526.026.884.03c-.053-.751-.053-1.645-.053-2.694v-8.11c0-1.05 0-1.943.053-2.693M18.75 7.945c0-1.05 0-1.943-.053-2.693c.358.002.643.01.884.03c.37.03.57.085.713.159c.33.168.598.435.765.765c.074.144.13.343.16.713c.03.38.031.869.031 1.581v7c0 .712 0 1.202-.032 1.58c-.03.371-.085.57-.159.715a1.75 1.75 0 0 1-.765.764c-.144.074-.343.13-.713.16c-.24.02-.526.026-.884.03c.053-.751.053-1.645.053-2.694zM8.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C6.752 5.562 6.75 6.564 6.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103s2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103s-2.437.002-3.192.103" clip-rule="evenodd"></svg:path>`,
})
export class SolarSliderVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleBoldIcon],svg[solar-smart-home-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.25A.75.75 0 0 1 3 11.5a9.75 9.75 0 0 1 9.75 9.75a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 3 13a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M2.25 15.25A.75.75 0 0 1 3 14.5a6.75 6.75 0 0 1 6.75 6.75a.75.75 0 0 1-1.5 0C8.25 18.35 5.9 16 3 16a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M3 17.5A.75.75 0 0 0 3 19a2.25 2.25 0 0 1 2.25 2.25a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 3 17.5m-.976-7.278C2.32 10.08 2.65 10 3 10c6.213 0 11.25 5.037 11.25 11.25q-.002.396-.128.749c2.782-.01 4.276-.104 5.329-1.01c1.175-1.013 1.419-2.706 1.906-6.094l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183c-.31.648-.38 1.359-.31 2.347"></svg:path>`,
})
export class SolarSmartHomeAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleBoldDuotoneIcon],svg[solar-smart-home-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 12.25a.75.75 0 0 1 .75-.75a9.75 9.75 0 0 1 9.75 9.75a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 2.75 13a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M2 15.25a.75.75 0 0 1 .75-.75a6.75 6.75 0 0 1 6.75 6.75a.75.75 0 0 1-1.5 0C8 18.35 5.65 16 2.75 16a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M2.75 17.5a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 5 21.25a.75.75 0 0 0 1.5 0a3.75 3.75 0 0 0-3.75-3.75"></svg:path>`,
})
export class SolarSmartHomeAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleBrokenIcon],svg[solar-smart-home-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093c-1.069.92-2.591 1.004-5.451 1.011m7.665-14.124c-.54-1.127-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183c-.286.598-.368 1.25-.324 2.125M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleLineDuotoneIcon],svg[solar-smart-home-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2.011 10c-.044-.875.038-1.527.324-2.125c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093c-1.069.92-2.591 1.004-5.451 1.011" opacity=".5"></svg:path><svg:path d="M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleLinearIcon],svg[solar-smart-home-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2.011 10c-.044-.875.038-1.527.324-2.125c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093c-1.069.92-2.591 1.004-5.451 1.011"></svg:path><svg:path d="M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleOutlineIcon],svg[solar-smart-home-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.096 4.511c1.057-.63 1.803-1.073 2.428-1.365c.609-.284 1.047-.396 1.476-.396s.867.112 1.476.396c.625.292 1.37.735 2.428 1.365l1.385.825c1.165.694 1.986 1.184 2.59 1.638c.587.443.91.809 1.11 1.225c.199.416.282.894.257 1.626c-.026.75-.16 1.691-.352 3.026l-.28 1.937c-.246 1.714-.422 2.928-.675 3.845c-.247.896-.545 1.415-.977 1.787c-.395.34-.895.552-1.681.675c-.806.127-1.844.15-3.283.154a.75.75 0 1 0 .004 1.5c1.421-.003 2.574-.025 3.512-.172c.957-.15 1.752-.44 2.426-1.02c.743-.64 1.155-1.474 1.445-2.525c.281-1.02.47-2.328.707-3.978l.292-2.032c.185-1.282.332-2.305.36-3.146c.03-.87-.062-1.614-.403-2.325S21.477 6.3 20.78 5.775c-.675-.508-1.567-1.039-2.686-1.706l-1.456-.867c-1.016-.605-1.826-1.088-2.527-1.415c-.724-.338-1.386-.537-2.111-.537s-1.387.2-2.11.537c-.702.327-1.512.81-2.528 1.415l-1.456.867c-1.119.667-2.01 1.198-2.686 1.706C2.523 6.3 2 6.84 1.66 7.551c-.363.755-.445 1.548-.398 2.486a.75.75 0 0 0 1.498-.074c-.04-.811.04-1.323.252-1.764c.2-.416.521-.782 1.11-1.225c.603-.454 1.424-.944 2.589-1.638z"></svg:path><svg:path fill="currentColor" d="M2 12.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 22a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2 12.25"></svg:path><svg:path fill="currentColor" d="M1.25 16a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 22a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M2 18.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 22a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 18.25"></svg:path>`,
})
export class SolarSmartHomeAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeBoldIcon],svg[solar-smart-home-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.485 12.25a.75.75 0 0 1 .75-.75c5.39 0 9.758 4.365 9.758 9.75a.75.75 0 0 1-1.501 0c0-4.556-3.697-8.25-8.257-8.25a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 1 0 0 1.5a5.25 5.25 0 0 1 5.254 5.25a.75.75 0 0 0 1.502 0a6.753 6.753 0 0 0-6.756-6.75m-.75 3.75a.75.75 0 0 1 .75-.75a3.75 3.75 0 0 1 3.753 3.75a.75.75 0 0 1-1.501 0A2.25 2.25 0 0 0 3.235 19a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 10.369c.355-.233.78-.369 1.235-.369c6.218 0 11.26 5.037 11.26 11.25c0 .263-.046.515-.129.75c3.527-.001 5.328-.04 6.462-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381s-1.468-1.537-3.367-2.715L16.11 3.867C14.104 2.622 13.101 2 11.992 2s-2.112.622-4.12 1.867l-2 1.241c-1.9 1.178-2.849 1.766-3.368 2.715c-.358.653-.47 1.398-.504 2.545"></svg:path>`,
})
export class SolarSmartHomeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeBoldDuotoneIcon],svg[solar-smart-home-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12.25a.75.75 0 0 1 .75-.75c5.39 0 9.758 4.365 9.758 9.75a.75.75 0 0 1-1.5 0c0-4.556-3.697-8.25-8.257-8.25A.75.75 0 0 1 2 12.25m.75 2.25a.75.75 0 1 0 0 1.5a5.25 5.25 0 0 1 5.255 5.25a.75.75 0 0 0 1.5 0a6.753 6.753 0 0 0-6.754-6.75M2 18.25a.75.75 0 0 1 .75-.75a3.75 3.75 0 0 1 3.754 3.75a.75.75 0 0 1-1.502 0A2.25 2.25 0 0 0 2.751 19A.75.75 0 0 1 2 18.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartHomeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeBrokenIcon],svg[solar-smart-home-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.772 22 14 22m7.48-14.177c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.04 6.874 2.52 7.823c-.317.58-.44 1.233-.488 2.177M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeLineDuotoneIcon],svg[solar-smart-home-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 22c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.04 6.874 2.52 7.823c-.317.58-.44 1.233-.488 2.177" opacity=".5"></svg:path><svg:path d="M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeLinearIcon],svg[solar-smart-home-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 22c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.11 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823c-.318.58-.44 1.233-.489 2.177"></svg:path><svg:path d="M11 22a9 9 0 0 0-9-9"></svg:path><svg:path d="M8 22a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class SolarSmartHomeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeOutlineIcon],svg[solar-smart-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144a.75.75 0 0 0 0 1.5h.058c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.427-1.416c-.699-.34-1.342-.542-2.05-.542s-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.398.728-.53 1.516-.58 2.499a.75.75 0 1 0 1.498.076c.046-.904.161-1.423.398-1.855c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z"></svg:path><svg:path fill="currentColor" d="M2 12.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 22a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2 12.25"></svg:path><svg:path fill="currentColor" d="M1.25 16a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 22a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M2 18.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 22a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 18.25"></svg:path>`,
})
export class SolarSmartHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2BoldIcon],svg[solar-smart-speaker-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.492 3.22c1.605-.447 3.095-.558 4.193-.406c.55.077.964.214 1.24.377c.272.16.367.315.397.432c.03.12.023.311-.14.6c-.165.29-.461.627-.903.98c-.881.706-2.227 1.383-3.831 1.83c-1.605.446-3.095.557-4.193.404c-.55-.076-.965-.214-1.241-.376c-.271-.16-.366-.315-.396-.432c-.031-.12-.023-.311.14-.6c.164-.29.46-.628.903-.98c.88-.706 2.227-1.383 3.831-1.83"></svg:path><svg:path fill="currentColor" d="M18.21 5.38a5.8 5.8 0 0 1-.994.995c-1.073.858-2.614 1.615-4.367 2.102c-1.752.488-3.453.633-4.8.446c-.673-.093-1.295-.275-1.796-.57a2.7 2.7 0 0 1-.532-.404l-.388 4.385l.445.446c.368.37 1.828 1.47 6.222 1.47c4.509 0 5.928-1.158 6.25-1.499l.47-.498z"></svg:path><svg:path fill="currentColor" d="m5.154 14.351l.012-.13c.973.709 2.943 1.53 6.834 1.53c3.933 0 5.903-.84 6.865-1.552l.018.241c.155 2.74.232 4.109-.267 5.148a4.3 4.3 0 0 1-1.665 1.834c-.97.578-2.292.578-4.935.578c-2.674 0-4.01 0-4.986-.587a4.3 4.3 0 0 1-1.667-1.858c-.494-1.052-.4-2.436-.209-5.204"></svg:path>`,
})
export class SolarSmartSpeaker2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2BoldDuotoneIcon],svg[solar-smart-speaker-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.047 3.435q.032.125.038.255c.057 1.416-2.273 3.185-5.437 4.065c-3.357.933-6.382.513-6.757-.938a1.2 1.2 0 0 1-.03-.462c.162-1.377 2.418-3.02 5.43-3.858c3.356-.934 6.382-.514 6.756.938" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.648 7.755c-3.357.933-6.382.513-6.757-.939a1.2 1.2 0 0 1-.036-.383l-.609 6.876c.56.561 2.244 1.69 6.754 1.69c4.628 0 6.28-1.19 6.795-1.733l-.71-9.577c.057 1.417-2.273 3.186-5.437 4.066"></svg:path><svg:path fill="currentColor" d="M7.03 21.413C8.006 22 9.342 22 12.016 22c2.643 0 3.964 0 4.935-.578a4.3 4.3 0 0 0 1.665-1.834c.5-1.04.422-2.409.267-5.148l-.088-1.174C18.28 13.81 16.628 15 12 15c-4.51 0-6.195-1.13-6.754-1.691l-.092 1.042c-.19 2.768-.285 4.152.21 5.204a4.3 4.3 0 0 0 1.666 1.858" opacity=".5"></svg:path>`,
})
export class SolarSmartSpeaker2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2BrokenIcon],svg[solar-smart-speaker-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.833 3.634a.75.75 0 0 0-1.496.111zm.05 10.806l.748-.042v-.013zm-13.729-.089l-.747-.066v.007l-.001.008zm1.455-7.93a.75.75 0 0 0-1.494-.132zm5.407 16.329a.75.75 0 0 0 0-1.5zM7.03 21.413l-.387.643zm-1.667-1.858l-.679.319zm13.253.033l.676.325zm-1.665 1.834l.384.644zm-4.504-14.39a.75.75 0 0 0 .402 1.445zm-6.556-.215l-.726.187zM15.83 21.06a.75.75 0 0 0 .341 1.461zM8.98 8.998a.75.75 0 0 0 .042-1.5zm3.037 12.252c-1.351 0-2.313 0-3.06-.07c-.738-.069-1.189-.199-1.54-.41l-.773 1.286c.625.376 1.33.54 2.174.617c.833.078 1.876.077 3.199.077zm-7.61-6.95c-.094 1.37-.169 2.446-.154 3.31c.015.87.12 1.6.432 2.264l1.358-.638c-.183-.389-.277-.877-.29-1.653c-.014-.783.054-1.783.15-3.18zm3.01 6.47a3.55 3.55 0 0 1-1.374-1.534l-1.358.638a5.04 5.04 0 0 0 1.96 2.182zm10.718-6.287c.078 1.383.133 2.372.111 3.147c-.022.767-.12 1.25-.305 1.634l1.352.649c.315-.655.427-1.377.452-2.24c.025-.854-.036-1.919-.113-3.275zm-.194 4.78a3.54 3.54 0 0 1-1.373 1.514l.768 1.289a5.04 5.04 0 0 0 1.957-2.153zm-.619-15.64c.031.12.023.311-.14.6c-.164.29-.46.627-.902.98c-.882.706-2.228 1.383-3.832 1.83l.402 1.444c1.753-.487 3.294-1.244 4.367-2.102c.535-.428.983-.905 1.27-1.414c.29-.512.444-1.107.288-1.713zM6.618 6.629c-.03-.12-.022-.311.14-.6c.165-.29.461-.628.903-.98c.881-.706 2.228-1.383 3.832-1.83l-.402-1.445c-1.753.488-3.294 1.244-4.367 2.103c-.535.428-.983.905-1.271 1.414c-.29.512-.444 1.107-.287 1.713zm4.875-3.41c1.604-.446 3.094-.557 4.192-.405c.55.077.965.214 1.241.377c.271.16.366.315.396.432l1.453-.375c-.157-.609-.581-1.051-1.088-1.35c-.5-.295-1.123-.476-1.795-.57c-1.348-.186-3.049-.04-4.801.446zm-5.59 11.198l.707-7.996l-1.494-.132l-.708 7.996zM17.336 3.745l.797 10.75l1.496-.11l-.797-10.75zM16.17 22.522a4 4 0 0 0 1.164-.456l-.768-1.288a2.6 2.6 0 0 1-.738.283zM9.02 7.5c-.776-.022-1.39-.149-1.81-.337c-.423-.19-.558-.393-.594-.533l-1.452.375c.192.744.777 1.233 1.434 1.527c.66.295 1.486.442 2.38.467z"></svg:path><svg:path fill="currentColor" d="M4.715 13.838c.75.753 2.66 1.912 7.285 1.912v-1.5c-4.394 0-5.854-1.1-6.222-1.47zM12 15.75c4.747 0 6.634-1.222 7.34-1.97l-1.09-1.03c-.322.341-1.742 1.5-6.25 1.5z"></svg:path>`,
})
export class SolarSmartSpeaker2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2LineDuotoneIcon],svg[solar-smart-speaker-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.883 14.44l.748-.042v-.013zm-13.729-.089l-.747-.066v.007l-.001.008zm1.876 7.062l-.387.643zm-1.667-1.858l-.679.319zm13.253.033l.676.325zm-1.665 1.834l.384.644zm-4.935-.172c-1.351 0-2.313 0-3.06-.07c-.738-.069-1.189-.199-1.54-.41l-.773 1.286c.625.376 1.33.54 2.174.617c.833.078 1.876.077 3.199.077zm-7.61-6.95c-.094 1.37-.169 2.446-.154 3.31c.015.87.12 1.6.432 2.264l1.358-.638c-.183-.389-.277-.877-.29-1.653c-.014-.783.054-1.783.15-3.18zm3.01 6.47a3.55 3.55 0 0 1-1.374-1.534l-1.358.638a5.04 5.04 0 0 0 1.96 2.182zm10.718-6.287c.078 1.383.133 2.372.111 3.147c-.022.767-.12 1.25-.305 1.634l1.352.649c.315-.655.427-1.377.452-2.24c.025-.854-.036-1.919-.113-3.275zm-6.118 8.267c1.307 0 2.339 0 3.164-.076c.834-.077 1.533-.238 2.155-.608l-.768-1.288c-.35.207-.796.335-1.526.403c-.74.068-1.69.069-3.025.069zm5.924-3.486a3.54 3.54 0 0 1-1.373 1.514l.768 1.288a5.04 5.04 0 0 0 1.957-2.153zm-.619-15.641c.031.12.023.311-.14.6c-.164.29-.46.627-.902.98c-.882.706-2.228 1.383-3.832 1.83l.402 1.444c1.753-.487 3.294-1.244 4.367-2.102c.535-.428.983-.905 1.27-1.414c.29-.512.444-1.107.288-1.713zm-4.874 3.41c-1.604.446-3.094.557-4.193.404c-.55-.076-.964-.214-1.24-.376c-.272-.16-.366-.315-.397-.432l-1.452.375c.157.609.581 1.051 1.087 1.35c.502.294 1.124.476 1.796.57c1.347.186 3.049.04 4.801-.447zm-5.83-.404c-.03-.12-.022-.311.14-.6c.165-.29.461-.628.903-.98c.881-.706 2.228-1.383 3.832-1.83l-.402-1.445c-1.753.488-3.294 1.244-4.367 2.103c-.535.428-.983.905-1.271 1.414c-.29.512-.444 1.107-.287 1.713zm4.875-3.41c1.604-.446 3.094-.557 4.192-.405c.55.077.965.214 1.241.377c.271.16.366.315.396.432l1.453-.375c-.157-.609-.581-1.051-1.088-1.35c-.5-.295-1.123-.476-1.795-.57c-1.348-.186-3.049-.04-4.801.446zm-5.59 11.198l.707-7.996l-1.494-.132l-.708 7.996zM17.336 3.745l.797 10.75l1.496-.11l-.797-10.75z"></svg:path><svg:path fill="currentColor" d="M4.715 13.838c.75.753 2.66 1.912 7.285 1.912v-1.5c-4.394 0-5.854-1.1-6.222-1.47zM12 15.75c4.747 0 6.634-1.222 7.34-1.97l-1.09-1.03c-.322.341-1.742 1.5-6.25 1.5z" opacity=".5"></svg:path>`,
})
export class SolarSmartSpeaker2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2LinearIcon],svg[solar-smart-speaker-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.883 14.44l.748-.042v-.013zm-13.729-.089l-.747-.066v.007l-.001.008zm1.876 7.062l-.387.643zm-1.667-1.858l-.679.319zm13.253.033l.676.325zm-1.665 1.834l.384.644zm-4.935-.172c-1.351 0-2.313 0-3.06-.07c-.738-.069-1.189-.199-1.54-.41l-.773 1.286c.625.376 1.33.54 2.174.617c.833.078 1.876.077 3.199.077zm-7.61-6.95c-.094 1.37-.169 2.446-.154 3.31c.015.87.12 1.6.432 2.264l1.358-.638c-.183-.389-.277-.877-.29-1.653c-.014-.783.054-1.783.15-3.18zm3.01 6.47a3.55 3.55 0 0 1-1.374-1.534l-1.358.638a5.04 5.04 0 0 0 1.96 2.182zm10.718-6.287c.078 1.383.133 2.372.111 3.147c-.022.767-.12 1.25-.305 1.634l1.352.649c.315-.655.427-1.377.452-2.24c.025-.854-.036-1.919-.113-3.275zm-6.118 8.267c1.307 0 2.339 0 3.164-.076c.834-.077 1.533-.238 2.155-.608l-.768-1.288c-.35.207-.796.335-1.526.403c-.74.068-1.69.069-3.025.069zm5.924-3.486a3.54 3.54 0 0 1-1.373 1.514l.768 1.288a5.04 5.04 0 0 0 1.957-2.153zm-.619-15.641c.031.12.023.311-.14.6c-.164.29-.46.627-.902.98c-.882.706-2.228 1.383-3.832 1.83l.402 1.444c1.753-.487 3.294-1.244 4.367-2.102c.535-.428.983-.905 1.27-1.414c.29-.512.444-1.107.288-1.713zm-4.874 3.41c-1.604.446-3.094.557-4.193.404c-.55-.076-.964-.214-1.24-.376c-.272-.16-.366-.315-.397-.432l-1.452.375c.157.609.581 1.051 1.087 1.35c.502.294 1.124.476 1.796.57c1.347.186 3.049.04 4.801-.447zm-5.83-.404c-.03-.12-.022-.311.14-.6c.165-.29.461-.628.903-.98c.881-.706 2.228-1.383 3.832-1.83l-.402-1.445c-1.753.488-3.294 1.244-4.367 2.103c-.535.428-.983.905-1.271 1.414c-.29.512-.444 1.107-.287 1.713zm4.875-3.41c1.604-.446 3.094-.557 4.192-.405c.55.077.965.214 1.241.377c.271.16.366.315.396.432l1.453-.375c-.157-.609-.581-1.051-1.088-1.35c-.5-.295-1.123-.476-1.795-.57c-1.348-.186-3.049-.04-4.801.446zm-5.59 11.198l.707-7.996l-1.494-.132l-.708 7.996zM17.336 3.745l.797 10.75l1.496-.11l-.797-10.75z"></svg:path><svg:path fill="currentColor" d="M4.715 13.838c.75.753 2.66 1.912 7.285 1.912v-1.5c-4.394 0-5.854-1.1-6.222-1.47zM12 15.75c4.747 0 6.634-1.222 7.34-1.97l-1.09-1.03c-.322.341-1.742 1.5-6.25 1.5z"></svg:path>`,
})
export class SolarSmartSpeaker2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2OutlineIcon],svg[solar-smart-speaker-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.684 2.814c-1.098-.152-2.588-.04-4.192.406S8.542 4.343 7.66 5.048c-.442.353-.738.691-.903.982c-.094.166-.136.3-.15.407l-.003.044a.5.5 0 0 0 .013.148c.03.117.125.272.397.432c.276.162.69.3 1.24.376c1.099.153 2.589.042 4.193-.405c1.604-.446 2.95-1.123 3.832-1.828c.441-.354.738-.691.902-.982c.163-.288.171-.48.14-.6c-.03-.116-.125-.271-.396-.43c-.276-.164-.69-.301-1.24-.378M5.106 6.384a2.56 2.56 0 0 1 .346-1.093c.288-.51.736-.986 1.271-1.414c1.073-.859 2.614-1.615 4.367-2.103c1.752-.487 3.453-.632 4.8-.445c.673.093 1.295.274 1.796.57c.507.298.93.74 1.088 1.349q.052.204.06.405l.797 10.745l.002.035c.076 1.34.136 2.394.111 3.24c-.025.863-.137 1.585-.452 2.24a5.04 5.04 0 0 1-1.957 2.153c-.622.37-1.32.531-2.155.608c-.817.076-1.837.076-3.127.076h-.076c-1.304 0-2.335 0-3.16-.077c-.843-.078-1.549-.241-2.174-.617a5.04 5.04 0 0 1-1.959-2.182c-.311-.663-.417-1.393-.432-2.265c-.015-.856.058-1.92.152-3.274l.003-.043zm12.407-.26q-.143.128-.297.251c-1.073.858-2.614 1.615-4.367 2.102c-1.752.488-3.454.633-4.8.446c-.596-.082-1.152-.234-1.62-.473l-.402 4.543c.63.466 2.246 1.257 5.973 1.257c3.824 0 5.426-.833 6.02-1.294zm.63 8.518C17.018 15.22 15.13 15.75 12 15.75c-3.105 0-4.987-.522-6.115-1.093c-.087 1.265-.146 2.191-.133 2.926c.013.776.107 1.264.29 1.653a3.55 3.55 0 0 0 1.374 1.534c.351.211.802.341 1.54.41c.747.07 1.709.07 3.06.07c1.335 0 2.286 0 3.025-.07c.73-.067 1.177-.195 1.526-.402a3.54 3.54 0 0 0 1.373-1.514c.185-.385.283-.867.305-1.634c.022-.745-.029-1.688-.102-2.988" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartSpeaker2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerBoldIcon],svg[solar-smart-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.24 2.461a4.83 4.83 0 0 0-3.92 4.197l-.016.137a47 47 0 0 0-.296 6.268l.484.422c.436.38 1.637 1.381 4.427 1.916c.321-.805.776-1.458 1.421-1.918c.738-.524 1.637-.733 2.66-.733c1.022 0 1.92.209 2.658.733c.646.46 1.101 1.114 1.422 1.92a12.4 12.4 0 0 0 2.195-.616c1.284-.502 1.919-1.066 2.217-1.34l.497-.456c.044-2.15-.06-4.303-.313-6.443a4.7 4.7 0 0 0-3.809-4.066l-.323-.06a24.7 24.7 0 0 0-9.09 0zM8.488 4.98a.75.75 0 1 0-.978-1.138c-.467.402-.761 1-.761 1.57c0 1.013.767 1.71 1.653 2.114c.91.416 2.153.635 3.597.635s2.686-.22 3.597-.635c.886-.404 1.653-1.101 1.653-2.115c0-.623-.345-1.123-.761-1.48a.75.75 0 0 0-.978 1.137c.225.194.239.313.239.343c0 .14-.102.443-.776.75c-.649.296-1.657.5-2.974.5s-2.325-.204-2.974-.5c-.674-.307-.776-.61-.776-.75c0-.032.01-.101.054-.191a.8.8 0 0 1 .185-.24" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 15.75c-.94 0-1.783-.045-2.539-.124c.214-.426.466-.718.75-.92c.405-.288.965-.456 1.79-.456c.823 0 1.384.168 1.789.456c.284.202.535.495.75.921c-.753.078-1.596.123-2.54.123"></svg:path><svg:path fill="currentColor" d="M20.902 15.057c-.458.342-1.125.753-2.079 1.127c-1.498.586-3.673 1.066-6.823 1.066c-5.137 0-7.69-1.294-8.908-2.17q.076 1.204.213 2.404a4.714 4.714 0 0 0 4.105 4.137l1.016.126c.495.062.742.093.99.118c1.717.18 3.45.18 5.169 0c.247-.025.494-.056.989-.118l.906-.113a4.84 4.84 0 0 0 4.215-4.26l.017-.154q.12-1.08.19-2.163"></svg:path>`,
})
export class SolarSmartSpeakerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerBoldDuotoneIcon],svg[solar-smart-speaker-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.461 15.626a25 25 0 0 0 2.54.124c.943 0 1.786-.045 2.538-.123c-.214-.426-.465-.72-.75-.921c-.404-.288-.965-.456-1.789-.456s-1.384.168-1.79.456c-.283.202-.535.494-.749.92"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.252 2.14.356 4.292.312 6.443l-.497.457c-.298.273-.933.837-2.217 1.34a12.4 12.4 0 0 1-2.195.615c-.321-.806-.776-1.46-1.422-1.92c-.738-.524-1.636-.733-2.659-.733s-1.92.209-2.659.733c-.645.46-1.1 1.113-1.42 1.918c-2.79-.535-3.992-1.536-4.428-1.916l-.484-.422a47 47 0 0 1 .296-6.268zM8.489 4.98a.75.75 0 1 0-.978-1.138c-.467.402-.761 1-.761 1.57c0 1.013.767 1.71 1.653 2.114c.91.416 2.153.635 3.597.635s2.686-.22 3.597-.635c.886-.404 1.653-1.101 1.653-2.115c0-.623-.345-1.123-.761-1.48a.75.75 0 0 0-.978 1.137c.225.194.239.313.239.343c0 .14-.102.443-.776.75c-.649.296-1.657.5-2.974.5s-2.325-.204-2.974-.5c-.674-.307-.776-.61-.776-.75c0-.032.01-.101.054-.191a.8.8 0 0 1 .185-.24" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.823 16.184c.953-.374 1.62-.786 2.079-1.127q-.07 1.083-.19 2.163l-.018.154a4.84 4.84 0 0 1-4.214 4.26l-.907.113c-.494.062-.742.093-.989.118c-1.718.18-3.45.18-5.17 0a44 44 0 0 1-.989-.118L7.41 21.62a4.714 4.714 0 0 1-4.105-4.136q-.138-1.2-.213-2.404c1.218.876 3.77 2.17 8.908 2.17c3.15 0 5.325-.48 6.823-1.066" opacity=".5"></svg:path>`,
})
export class SolarSmartSpeakerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerBrokenIcon],svg[solar-smart-speaker-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 14.05c.653.57 2.487 2.034 7 2.377M21 14c-.602.554-2.361 2.076-6.99 2.427"></svg:path><svg:path d="M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5"></svg:path><svg:path stroke-linecap="round" d="M8 4.412c-.32.275-.5.673-.5 1c0 1.153 1.739 2 4.5 2s4.5-.847 4.5-2c0-.327-.18-.636-.5-.912"></svg:path><svg:path stroke-linecap="round" d="M21 12a47 47 0 0 1-.288 5.22l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689l.016-.137a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067q.084.724.148 1.452"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerLineDuotoneIcon],svg[solar-smart-speaker-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2.507 14.615c.877.765 3.318 2.635 9.493 2.635v-1.5c-5.807 0-7.9-1.736-8.507-2.266zM12 17.25c3.15 0 5.325-.48 6.823-1.066c1.509-.59 2.3-1.278 2.685-1.632l-1.015-1.104c-.298.273-.933.836-2.217 1.339c-1.294.507-3.278.963-6.276.963z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 4.412c-.32.275-.5.673-.5 1c0 1.153 1.739 2 4.5 2s4.5-.847 4.5-2c0-.327-.18-.636-.5-.912" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689z"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerLinearIcon],svg[solar-smart-speaker-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2.507 14.615c.877.765 3.318 2.635 9.493 2.635v-1.5c-5.807 0-7.9-1.736-8.507-2.266zM12 17.25c3.15 0 5.325-.48 6.823-1.066c1.509-.59 2.3-1.278 2.685-1.632l-1.015-1.104c-.298.273-.933.836-2.217 1.339c-1.294.507-3.278.963-6.276.963z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 4.412c-.32.275-.5.673-.5 1c0 1.153 1.739 2 4.5 2s4.5-.847 4.5-2c0-.327-.18-.636-.5-.912"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689z"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticBoldIcon],svg[solar-smart-speaker-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.24 2.461a4.83 4.83 0 0 0-3.92 4.197l-.016.137a47 47 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118c1.717.18 3.45.18 5.169 0c.247-.025.494-.056.989-.118l.906-.113a4.84 4.84 0 0 0 4.215-4.26l.017-.154a46.8 46.8 0 0 0-.035-10.672a4.7 4.7 0 0 0-3.809-4.066l-.323-.06a24.7 24.7 0 0 0-9.09 0zm-.815 3.057a.75.75 0 0 1 1.057-.093C8.059 5.908 9.676 6.75 12 6.75s3.941-.842 4.518-1.325a.75.75 0 1 1 .963 1.15C16.62 7.297 14.657 8.25 12 8.25s-4.62-.953-5.482-1.675a.75.75 0 0 1-.093-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartSpeakerMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticBoldDuotoneIcon],svg[solar-smart-speaker-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.454 2.421l-.215.04a4.83 4.83 0 0 0-3.918 4.197l-.016.137a47 47 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118c1.717.18 3.45.18 5.169 0c.246-.025.494-.056.988-.118l.907-.113a4.84 4.84 0 0 0 4.215-4.26l.017-.154a46.8 46.8 0 0 0-.035-10.672a4.7 4.7 0 0 0-3.809-4.066l-.323-.06a24.7 24.7 0 0 0-9.09 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.482 5.425a.75.75 0 1 0-.964 1.15C7.38 7.297 9.344 8.25 12 8.25s4.62-.953 5.482-1.675a.75.75 0 0 0-.963-1.15C15.94 5.908 14.324 6.75 12 6.75s-3.941-.842-4.518-1.325"></svg:path>`,
})
export class SolarSmartSpeakerMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticBrokenIcon],svg[solar-smart-speaker-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 12a47 47 0 0 1-.288 5.22l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689l.016-.137a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067q.084.724.148 1.452"></svg:path><svg:path d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticLineDuotoneIcon],svg[solar-smart-speaker-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689z"></svg:path><svg:path stroke-linecap="round" d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticLinearIcon],svg[solar-smart-speaker-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689z"></svg:path><svg:path stroke-linecap="round" d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6"></svg:path></svg:g>`,
})
export class SolarSmartSpeakerMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticOutlineIcon],svg[solar-smart-speaker-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.407 3.158a24 24 0 0 0-8.815 0l-.215.04a4.08 4.08 0 0 0-3.31 3.546l-.017.137c-.4 3.494-.4 7.023 0 10.518a3.964 3.964 0 0 0 3.453 3.477l1.015.127c.498.062.737.092.975.116c1.667.175 3.347.175 5.014 0c.238-.024.476-.054.974-.116l.906-.113a4.09 4.09 0 0 0 3.562-3.6l.018-.153c.389-3.49.377-7.013-.034-10.501a3.95 3.95 0 0 0-3.203-3.417zm-9.09-1.474a25.5 25.5 0 0 1 9.366 0l.323.06a5.45 5.45 0 0 1 4.416 4.716c.425 3.601.437 7.24.035 10.843l-.017.154a5.59 5.59 0 0 1-4.867 4.921l-.917.115c-.485.06-.74.092-.994.118c-1.77.185-3.555.185-5.325 0c-.254-.026-.508-.058-.994-.118l-1.026-.128A5.464 5.464 0 0 1 2.56 17.57a47.7 47.7 0 0 1 0-10.86l.016-.137a5.58 5.58 0 0 1 4.526-4.849zm-.892 3.834a.75.75 0 0 1 1.057-.093C8.059 5.908 9.676 6.75 12 6.75s3.941-.842 4.518-1.325a.75.75 0 1 1 .963 1.15C16.62 7.297 14.657 8.25 12 8.25s-4.62-.953-5.482-1.675a.75.75 0 0 1-.093-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartSpeakerMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerOutlineIcon],svg[solar-smart-speaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.407 3.158a24 24 0 0 0-8.815 0l-.215.04a4.08 4.08 0 0 0-3.31 3.546l-.017.137a46 46 0 0 0-.273 6.84c.595.463 1.816 1.234 4.143 1.68c.321-.805.776-1.458 1.421-1.918c.738-.524 1.637-.733 2.659-.733s1.921.209 2.659.733c.646.46 1.1 1.114 1.422 1.92a12.4 12.4 0 0 0 2.195-.616c.98-.384 1.582-.803 1.944-1.101a46 46 0 0 0-.287-7.05a3.95 3.95 0 0 0-3.203-3.417zm3.707 12.413a10 10 0 0 1-1.291.613C17.325 16.77 15.15 17.25 12 17.25c-4.221 0-6.697-.874-8.122-1.671q.069.91.172 1.82a3.964 3.964 0 0 0 3.453 3.477l1.015.127c.498.062.737.092.975.116c1.667.175 3.347.175 5.014 0c.238-.024.476-.054.974-.116l.906-.113a4.09 4.09 0 0 0 3.562-3.6l.018-.153q.087-.782.147-1.566m-5.575.056c-.214-.426-.465-.72-.75-.921c-.405-.288-.965-.456-1.789-.456s-1.384.168-1.79.456c-.283.202-.535.494-.749.92c.755.079 1.598.124 2.539.124c.944 0 1.787-.045 2.54-.123M7.317 1.684a25.5 25.5 0 0 1 9.366 0l.323.06a5.45 5.45 0 0 1 4.416 4.716c.425 3.601.437 7.24.035 10.843l-.017.154a5.59 5.59 0 0 1-4.867 4.921l-.917.115c-.485.06-.74.092-.994.118c-1.77.185-3.555.185-5.325 0c-.254-.026-.508-.058-.994-.118l-1.026-.128A5.464 5.464 0 0 1 2.56 17.57a47.7 47.7 0 0 1 0-10.86l.016-.137a5.58 5.58 0 0 1 4.526-4.849zm1.252 2.238a.75.75 0 0 1-.08 1.058a.8.8 0 0 0-.185.24a.5.5 0 0 0-.054.191c0 .14.102.443.776.75c.649.297 1.657.5 2.974.5s2.325-.203 2.974-.5c.674-.307.776-.61.776-.75c0-.03-.014-.149-.239-.342a.75.75 0 0 1 .978-1.138c.416.358.761.857.761 1.48c0 1.014-.767 1.711-1.653 2.115c-.91.416-2.153.635-3.597.635s-2.686-.22-3.597-.635c-.886-.404-1.653-1.1-1.653-2.115c0-.569.294-1.167.761-1.568a.75.75 0 0 1 1.058.08" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartSpeakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2BoldIcon],svg[solar-smart-vacuum-cleaner-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.52 19.332A9.96 9.96 0 0 1 12 21.75a9.96 9.96 0 0 1-6.52-2.418L2.53 22.28a.75.75 0 0 1-1.06-1.06l2.948-2.95A9.96 9.96 0 0 1 2 11.75c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 0 1-2.418 6.52l2.948 2.95a.75.75 0 1 1-1.06 1.06zM8.25 8.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleaner2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2BoldDuotoneIcon],svg[solar-smart-vacuum-cleaner-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.06 19l-3.53 3.53a.75.75 0 0 1-1.06-1.06L5 17.94zm11.88 0l3.53 3.53a.75.75 0 1 0 1.06-1.06L19 17.94z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 8.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 21.5c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10M8.25 8.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleaner2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2BrokenIcon],svg[solar-smart-vacuum-cleaner-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 9a3 3 0 1 0-3 3m0 6v-2M2 22l2.5-2.5M22 22l-2.5-2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleaner2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2LineDuotoneIcon],svg[solar-smart-vacuum-cleaner-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M15 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2M2 22l2.5-2.5M22 22l-2.5-2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleaner2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2LinearIcon],svg[solar-smart-vacuum-cleaner-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M15 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2M2 22l2.5-2.5M22 22l-2.5-2.5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleaner2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2OutlineIcon],svg[solar-smart-vacuum-cleaner-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 2.699-.994 5.165-2.637 7.053l2.417 2.417a.75.75 0 1 1-1.06 1.06l-2.417-2.417A10.7 10.7 0 0 1 12 22.75c-2.699 0-5.165-.994-7.053-2.637L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.417-2.417A10.7 10.7 0 0 1 1.25 12M12 6.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 9a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M12 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleaner2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerBoldIcon],svg[solar-smart-vacuum-cleaner-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 9a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.21 15.904A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 .79 3.904L2.706 16A3.75 3.75 0 0 0 8 21.295l.096-.086c1.2.51 2.519.791 3.904.791a10 10 0 0 0 3.904-.79l.096.085A3.75 3.75 0 0 0 21.295 16zm-.768 1.459a10.05 10.05 0 0 1-3.08 3.079a2.25 2.25 0 0 0 3.08-3.08m-13.805 3.08a10.05 10.05 0 0 1-3.08-3.08a2.25 2.25 0 0 0 3.08 3.08M12 5.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleanerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerBoldDuotoneIcon],svg[solar-smart-vacuum-cleaner-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.441 19.427l-1 1.118l.559.5a3.75 3.75 0 0 0 5.295-5.295l-.5-.56l-1.118 1.001zm-8.882 0l1 1.118l-.559.5a3.75 3.75 0 0 1-5.295-5.295l.5-.56l1.118 1.001z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 6.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 11.75c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10m-13.75-3a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleanerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerBrokenIcon],svg[solar-smart-vacuum-cleaner-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 9a3 3 0 1 0-3 3"></svg:path><svg:path d="M16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleanerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerLineDuotoneIcon],svg[solar-smart-vacuum-cleaner-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M15 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path d="M16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleanerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerLinearIcon],svg[solar-smart-vacuum-cleaner-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M15 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm1.5 11.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleanerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerOutlineIcon],svg[solar-smart-vacuum-cleaner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 1.64-.367 3.195-1.025 4.586a3.75 3.75 0 0 1-5.14 5.14A10.7 10.7 0 0 1 12 22.75c-1.64 0-3.195-.367-4.586-1.025a3.75 3.75 0 0 1-5.14-5.14A10.7 10.7 0 0 1 1.25 12m2.012 6.263a2.25 2.25 0 0 0 2.475 2.475a10.8 10.8 0 0 1-2.475-2.475m15.002 2.475q.116.012.236.012a2.25 2.25 0 0 0 2.238-2.486a10.8 10.8 0 0 1-2.474 2.474M12 6.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 9a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M12 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleanerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2BoldIcon],svg[solar-smartphone-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2S6.343 2 5.172 3.172M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphone2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2BoldDuotoneIcon],svg[solar-smartphone-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2S6.343 2 5.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class SolarSmartphone2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2BrokenIcon],svg[solar-smartphone-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5-5H9"></svg:path><svg:circle cx="12" cy="17" r="2"></svg:circle></svg:g>`,
})
export class SolarSmartphone2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2LineDuotoneIcon],svg[solar-smartphone-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" d="M15 5H9" opacity=".5"></svg:path><svg:circle cx="12" cy="17" r="2" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarSmartphone2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2LinearIcon],svg[solar-smartphone-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M15 5H9"></svg:path><svg:circle cx="12" cy="19" r="1"></svg:circle><svg:path d="M4 17h16M4 7h16"></svg:path></svg:g>`,
})
export class SolarSmartphone2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2OutlineIcon],svg[solar-smartphone-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M7.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14M8.25 5A.75.75 0 0 1 9 4.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 5M12 15.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 17a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphone2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneBoldIcon],svg[solar-smartphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.052 2h-.104c-1.68 0-3.01 0-4.052.142c-1.072.147-1.94.456-2.624 1.152s-.988 1.58-1.132 2.67C4 7.024 4 8.378 4 10.087v3.826c0 1.71 0 3.064.14 4.123c.144 1.09.448 1.974 1.132 2.67s1.552 1.005 2.624 1.152C8.937 22 10.268 22 11.948 22h.104c1.68 0 3.01 0 4.052-.142c1.072-.147 1.94-.456 2.624-1.152s.988-1.58 1.132-2.67c.14-1.06.14-2.414.14-4.123v-3.826c0-1.71 0-3.064-.14-4.123c-.144-1.09-.448-1.974-1.132-2.67s-1.552-1.005-2.624-1.152C15.063 2 13.732 2 12.052 2m-3.48 16.512a.69.69 0 0 1 .685-.698h5.486c.379 0 .686.312.686.698a.69.69 0 0 1-.686.697H9.257a.69.69 0 0 1-.686-.697" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneBoldDuotoneIcon],svg[solar-smartphone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.052 2c1.68 0 3.01 0 4.052.142c1.072.147 1.94.456 2.624 1.152s.988 1.58 1.132 2.67c.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123c-.144 1.09-.448 1.974-1.132 2.67s-1.552 1.005-2.624 1.152C15.063 22 13.732 22 12.052 22h-.104c-1.68 0-3.01 0-4.052-.142c-1.072-.147-1.94-.456-2.624-1.152s-.988-1.58-1.132-2.67C4 16.976 4 15.622 4 13.913v-3.826c0-1.71 0-3.064.14-4.123c.144-1.09.448-1.974 1.132-2.67S6.824 2.29 7.896 2.142C8.937 2 10.268 2 11.948 2z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.571 18.511c0-.385.307-.697.686-.697h5.486c.378 0 .685.312.685.697a.69.69 0 0 1-.685.698H9.257a.69.69 0 0 1-.686-.698"></svg:path>`,
})
export class SolarSmartphoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneBrokenIcon],svg[solar-smartphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5 9H9"></svg:path>`,
})
export class SolarSmartphoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneLineDuotoneIcon],svg[solar-smartphone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" d="M15 19H9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartphoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneLinearIcon],svg[solar-smartphone-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" d="M15 19H9"></svg:path></svg:g>`,
})
export class SolarSmartphoneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneOutlineIcon],svg[solar-smartphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M7.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14M8.25 19a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2BoldIcon],svg[solar-smartphone-rotate-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9.626c0 1.192.96 2.151 2.878 4.07l5.426 5.426C12.223 21.041 13.182 22 14.374 22s2.151-.96 4.07-2.878l.678-.678C21.041 16.526 22 15.566 22 14.374s-.96-2.151-2.878-4.07l-5.426-5.426C11.777 2.959 10.818 2 9.626 2s-2.151.96-4.07 2.878l-.678.678C2.959 7.475 2 8.434 2 9.626m7.478-3.539a.75.75 0 0 0-1.06-1.06l-3.392 3.39a.75.75 0 0 0 1.06 1.062zm7.27 10.662a1.44 1.44 0 1 0-2.035-2.035a1.44 1.44 0 0 0 2.035 2.035M16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865M7.74 22.126a.75.75 0 0 1-.866.613C3.674 22.196 1.25 19.38 1.25 16a.75.75 0 0 1 1.17-.621l1.5 1.014a.75.75 0 0 1-.84 1.242l-.1-.067c.577 1.91 2.18 3.358 4.146 3.693a.75.75 0 0 1 .613.865" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotate2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2BoldDuotoneIcon],svg[solar-smartphone-rotate-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.878 13.696C2.959 11.777 2 10.818 2 9.626s.96-2.151 2.878-4.07l.678-.678C7.475 2.959 8.434 2 9.626 2s2.151.96 4.07 2.878l5.426 5.426C21.041 12.223 22 13.182 22 14.374s-.96 2.151-2.878 4.07l-.678.678C16.525 21.041 15.566 22 14.374 22s-2.151-.96-4.07-2.878z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.478 6.087a.75.75 0 0 0-1.061-1.06l-3.392 3.39a.75.75 0 0 0 1.061 1.061zm7.27 10.662a1.439 1.439 0 1 0-2.035-2.035a1.439 1.439 0 0 0 2.035 2.035"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865M7.74 22.126a.75.75 0 0 1-.866.613C3.674 22.196 1.25 19.38 1.25 16a.75.75 0 0 1 1.17-.621l1.5 1.014a.75.75 0 0 1-.84 1.242l-.1-.067c.577 1.91 2.18 3.358 4.146 3.693a.75.75 0 0 1 .613.865" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotate2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2BrokenIcon],svg[solar-smartphone-rotate-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.444 19.122l.53.53zm-8.14 0l.53-.53zm8.818-8.818l-.53.53zm0 8.14l-.53-.53zM22 14.374h.75zM5.556 4.878l.53.53zm8.14 0l.53-.53zM9.626 2v.75zM4.878 5.556l-.53-.53zm0 8.14l-.53.53zM2 9.626h-.75zm7.478-3.54a.75.75 0 0 0-1.06-1.06zM5.026 8.418a.75.75 0 1 0 1.06 1.061zm13.27 0a.75.75 0 1 0-1.06 1.061zm-3.774-1.652a.75.75 0 0 0 1.06-1.06zm-9.114-.679l.678-.678l-1.06-1.06l-.679.678zm13.184 11.828l-.678.678l1.06 1.06l.678-.678zm-7.757.678l-5.427-5.427l-1.06 1.061l5.426 5.426zm7.079 0c-.975.974-1.653 1.65-2.232 2.092c-.562.429-.942.566-1.308.566v1.5c.826 0 1.522-.343 2.217-.873c.678-.517 1.439-1.28 2.383-2.224zm-8.14 1.06c.944.945 1.705 1.707 2.383 2.225c.695.53 1.391.873 2.217.873v-1.5c-.366 0-.745-.137-1.308-.566c-.579-.442-1.257-1.118-2.231-2.092zm8.818-8.817c.974.974 1.65 1.652 2.092 2.231c.429.563.566.942.566 1.308h1.5c0-.826-.343-1.522-.873-2.217c-.517-.678-1.28-1.439-2.224-2.383zm1.06 8.14c.945-.945 1.707-1.706 2.225-2.384c.53-.695.873-1.391.873-2.217h-1.5c0 .366-.137.746-.566 1.308c-.442.579-1.118 1.257-2.092 2.232zM6.086 5.407c.975-.974 1.653-1.65 2.232-2.092c.562-.429.942-.566 1.308-.566v-1.5c-.826 0-1.522.343-2.217.873c-.679.518-1.439 1.28-2.383 2.224zm8.14-1.06c-.944-.945-1.705-1.707-2.383-2.225c-.695-.53-1.391-.873-2.217-.873v1.5c.366 0 .745.137 1.308.566c.579.442 1.257 1.118 2.231 2.092zm-9.879.678c-.944.944-1.706 1.704-2.224 2.383c-.53.695-.873 1.391-.873 2.217h1.5c0-.366.137-.746.566-1.308c.442-.579 1.118-1.257 2.092-2.232zm1.061 8.14c-.974-.975-1.65-1.653-2.092-2.232c-.429-.562-.566-.942-.566-1.308h-1.5c0 .826.343 1.522.873 2.217c.518.678 1.28 1.439 2.224 2.383zm3.01-8.14L5.025 8.417l1.06 1.061l3.392-3.391zm7.8 10.218a.69.69 0 0 1 0 .974l1.06 1.06a2.19 2.19 0 0 0 0-3.095zm0 .974a.69.69 0 0 1-.974 0l-1.061 1.06c.855.856 2.24.856 3.096 0zm-.974 0a.69.69 0 0 1 0-.974l-1.061-1.06a2.19 2.19 0 0 0 0 3.095zm0-.974a.69.69 0 0 1 .974 0l1.06-1.06a2.19 2.19 0 0 0-3.095 0zm1.991-5.766l1.357 1.357l1.06-1.061l-1.356-1.357zm-4.07-4.07l1.357 1.357l1.06-1.06l-1.356-1.358z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6M3.5 17.014L2 16c0 3.015 2.162 5.517 5 6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotate2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2LineDuotoneIcon],svg[solar-smartphone-rotate-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.444 19.122l.53.53zm-8.14 0l.53-.53zm8.818-8.818l-.53.53zm0 8.14l-.53-.53zM22 14.374h.75zM5.556 4.878l.53.53zm8.14 0l.53-.53zM9.626 2v.75zM4.878 5.556l-.53-.53zm0 8.14l-.53.53zM2 9.626h-.75zm3.408-3.54l.678-.678l-1.06-1.06l-.679.678zm7.757-.678l5.427 5.427l1.06-1.061l-5.426-5.427zm5.427 12.506l-.678.678l1.06 1.06l.678-.678zm-7.757.678l-5.427-5.427l-1.06 1.061l5.426 5.426zm7.079 0c-.975.974-1.653 1.65-2.232 2.092c-.562.429-.942.566-1.308.566v1.5c.826 0 1.522-.343 2.217-.873c.678-.517 1.439-1.28 2.383-2.224zm-8.14 1.06c.944.945 1.705 1.707 2.383 2.225c.695.53 1.391.873 2.217.873v-1.5c-.366 0-.745-.137-1.308-.566c-.579-.442-1.257-1.118-2.231-2.092zm8.818-8.817c.974.974 1.65 1.652 2.092 2.231c.429.563.566.942.566 1.308h1.5c0-.826-.343-1.522-.873-2.217c-.517-.678-1.28-1.439-2.224-2.383zm1.06 8.14c.945-.945 1.707-1.706 2.225-2.384c.53-.695.873-1.391.873-2.217h-1.5c0 .366-.137.746-.566 1.308c-.442.579-1.118 1.257-2.092 2.232zM6.086 5.407c.975-.974 1.653-1.65 2.232-2.092c.562-.429.942-.566 1.308-.566v-1.5c-.826 0-1.522.343-2.217.873c-.679.518-1.439 1.28-2.383 2.224zm8.14-1.06c-.944-.945-1.705-1.707-2.383-2.225c-.695-.53-1.391-.873-2.217-.873v1.5c.366 0 .745.137 1.308.566c.579.442 1.257 1.118 2.231 2.092zm-9.879.678c-.944.944-1.706 1.704-2.224 2.383c-.53.695-.873 1.391-.873 2.217h1.5c0-.366.137-.746.566-1.308c.442-.579 1.118-1.257 2.092-2.232zm1.061 8.14c-.974-.975-1.65-1.653-2.092-2.232c-.429-.562-.566-.942-.566-1.308h-1.5c0 .826.343 1.522.873 2.217c.518.678 1.28 1.439 2.224 2.383z"></svg:path><svg:path fill="currentColor" d="M9.478 6.087a.75.75 0 0 0-1.06-1.06zm-4.452 2.33a.75.75 0 0 0 1.06 1.061zm3.391-3.39l-3.391 3.39l1.06 1.061l3.392-3.391zm7.8 10.217a.69.69 0 0 1 0 .974l1.062 1.061a2.19 2.19 0 0 0 0-3.095zm0 .974a.69.69 0 0 1-.973 0l-1.061 1.061a2.19 2.19 0 0 0 3.096 0zm-.973 0a.69.69 0 0 1 0-.974l-1.061-1.06a2.19 2.19 0 0 0 0 3.095zm0-.974a.69.69 0 0 1 .974 0l1.06-1.06a2.19 2.19 0 0 0-3.095 0z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 17.014L2 16c0 3.015 2.162 5.517 5 6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotate2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2LinearIcon],svg[solar-smartphone-rotate-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.444 19.122l.53.53zm-8.14 0l.53-.53zm8.818-8.818l-.53.53zm0 8.14l-.53-.53zM22 14.374h.75zM5.556 4.878l.53.53zm8.14 0l.53-.53zM9.626 2v.75zM4.878 5.556l-.53-.53zm0 8.14l-.53.53zM2 9.626h-.75zm7.478-3.54a.75.75 0 0 0-1.06-1.06zM5.026 8.418a.75.75 0 1 0 1.06 1.061zm.382-2.33l.678-.679l-1.06-1.06l-.679.678zm7.757-.679l5.427 5.427l1.06-1.061l-5.426-5.427zm5.427 12.506l-.678.678l1.06 1.06l.678-.678zm-7.757.678l-5.427-5.427l-1.06 1.061l5.426 5.426zm7.079 0c-.975.974-1.653 1.65-2.232 2.092c-.562.429-.942.566-1.308.566v1.5c.826 0 1.522-.343 2.217-.873c.678-.517 1.439-1.28 2.383-2.224zm-8.14 1.06c.944.945 1.705 1.707 2.383 2.225c.695.53 1.391.873 2.217.873v-1.5c-.366 0-.745-.137-1.308-.566c-.579-.442-1.257-1.118-2.231-2.092zm8.818-8.817c.974.974 1.65 1.652 2.092 2.231c.429.563.566.942.566 1.308h1.5c0-.826-.343-1.522-.873-2.217c-.517-.678-1.28-1.439-2.224-2.383zm1.06 8.14c.945-.945 1.707-1.706 2.225-2.384c.53-.695.873-1.391.873-2.217h-1.5c0 .366-.137.746-.566 1.308c-.442.579-1.118 1.257-2.092 2.232zM6.086 5.407c.975-.974 1.653-1.65 2.232-2.092c.562-.429.942-.566 1.308-.566v-1.5c-.826 0-1.522.343-2.217.873c-.679.518-1.439 1.28-2.383 2.224zm8.14-1.06c-.944-.945-1.705-1.707-2.383-2.225c-.695-.53-1.391-.873-2.217-.873v1.5c.366 0 .745.137 1.308.566c.579.442 1.257 1.118 2.231 2.092zm-9.879.678c-.944.944-1.706 1.704-2.224 2.383c-.53.695-.873 1.391-.873 2.217h1.5c0-.366.137-.746.566-1.308c.442-.579 1.118-1.257 2.092-2.232zm1.061 8.14c-.974-.975-1.65-1.653-2.092-2.232c-.429-.562-.566-.942-.566-1.308h-1.5c0 .826.343 1.522.873 2.217c.518.678 1.28 1.439 2.224 2.383zm3.01-8.14L5.025 8.417l1.06 1.061l3.392-3.391zm7.8 10.218a.69.69 0 0 1 0 .974l1.06 1.06a2.19 2.19 0 0 0 0-3.095zm0 .974a.69.69 0 0 1-.974 0l-1.061 1.06c.855.856 2.24.856 3.096 0zm-.974 0a.69.69 0 0 1 0-.974l-1.061-1.06a2.19 2.19 0 0 0 0 3.095zm0-.974a.69.69 0 0 1 .974 0l1.06-1.06a2.19 2.19 0 0 0-3.095 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6M3.5 17.014L2 16c0 3.015 2.162 5.517 5 6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotate2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2OutlineIcon],svg[solar-smartphone-rotate-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865M8.319 3.316c-.579.442-1.257 1.118-2.232 2.092l-.678.679c-.974.974-1.65 1.652-2.092 2.232c-.429.561-.566.941-.566 1.307s.137.746.566 1.308c.442.579 1.118 1.257 2.092 2.232l5.427 5.426c.974.974 1.652 1.65 2.231 2.092c.563.43.942.566 1.308.566s.746-.137 1.308-.566c.579-.442 1.257-1.118 2.232-2.092l.678-.678c.974-.975 1.65-1.653 2.092-2.232c.429-.562.566-.942.566-1.308s-.137-.745-.566-1.307c-.442-.58-1.118-1.258-2.092-2.232l-5.427-5.427c-.974-.974-1.652-1.65-2.231-2.092c-.562-.429-.942-.566-1.308-.566s-.746.137-1.308.566m-.91-1.193c.696-.53 1.392-.873 2.218-.873s1.522.343 2.217.873c.67.51 1.418 1.26 2.345 2.186l5.503 5.504c.927.926 1.676 1.675 2.186 2.344c.53.695.873 1.391.873 2.217s-.343 1.522-.873 2.218c-.51.668-1.26 1.417-2.186 2.344l-.755.755c-.927.927-1.676 1.676-2.344 2.186c-.696.53-1.392.873-2.218.873s-1.522-.343-2.217-.873c-.67-.51-1.418-1.26-2.344-2.186L4.31 14.188c-.927-.927-1.676-1.676-2.186-2.344c-.53-.696-.873-1.392-.873-2.218s.343-1.522.873-2.217c.51-.67 1.26-1.418 2.186-2.344l.755-.756c.927-.926 1.676-1.675 2.345-2.186m2.07 2.903a.75.75 0 0 1 0 1.06L6.086 9.479a.75.75 0 1 1-1.06-1.06l3.391-3.392a.75.75 0 0 1 1.06 0m6.74 10.218a.689.689 0 1 0-.974.974a.689.689 0 0 0 .974-.974m-2.035-1.06a2.189 2.189 0 1 1 3.096 3.095a2.189 2.189 0 0 1-3.096-3.096M1.648 15.337a.75.75 0 0 1 .772.04l1.5 1.015a.75.75 0 0 1-.84 1.242l-.1-.067c.577 1.91 2.18 3.358 4.146 3.693a.75.75 0 0 1-.252 1.479c-3.2-.545-5.624-3.361-5.624-6.74a.75.75 0 0 1 .398-.662" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotate2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleBoldIcon],svg[solar-smartphone-rotate-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19 9v5.934c0 .66-.353 1.268-.925 1.595a12.24 12.24 0 0 1-12.15 0A1.84 1.84 0 0 1 5 14.934V9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path><svg:path d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162c0 .267.134.6.547.984c.414.385 1.053.766 1.907 1.102c1.21.477 2.775.833 4.546.998v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.312A.75.75 0 0 1 9.75 22v-.66c-1.944-.17-3.7-.558-5.096-1.108c-.956-.377-1.781-.843-2.38-1.4c-.598-.558-1.024-1.261-1.024-2.082c0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122m16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338c0 1.378-1.168 2.41-2.547 3.101c-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 1 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307c1.294-.648 1.719-1.303 1.719-1.76c0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleBoldDuotoneIcon],svg[solar-smartphone-rotate-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162c0 .267.134.6.547.984c.414.385 1.053.766 1.907 1.102c1.21.477 2.775.833 4.546.998v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.313A.75.75 0 0 1 9.75 22v-.66c-1.944-.17-3.7-.558-5.096-1.108c-.956-.377-1.781-.843-2.38-1.4c-.598-.558-1.024-1.261-1.024-2.082c0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122m16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338c0 1.378-1.168 2.41-2.547 3.101c-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 0 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307c1.294-.648 1.719-1.303 1.719-1.76c0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19 9v10s-4.157 2-7 2s-7-2-7-2V9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarSmartphoneRotateAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleBrokenIcon],svg[solar-smartphone-rotate-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 5H9"></svg:path><svg:path fill="currentColor" d="M21.426 14.412a.75.75 0 1 0-.931 1.176zm-17.92 1.176a.75.75 0 1 0-.932-1.176zm8.494 5.1l.494.564a.75.75 0 0 0 0-1.129zm-1.5-1.313l.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm3.924-2.183a.75.75 0 0 0 .152 1.493zm6.07-4.23c.574.455.756.856.756 1.163h1.5c0-.95-.567-1.738-1.324-2.338zM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373l-1.5-1.312l-.988 1.128l1.5 1.313zm-1.5 2.441l1.5-1.312l-.988-1.129l-1.5 1.313zM21.25 16.75c0 .457-.425 1.112-1.719 1.76c-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459c1.379-.69 2.547-1.723 2.547-3.101zm-11.5 2.625v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248c-.71-.322-1.232-.672-1.565-1.017c-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922c.509.526 1.21.972 2.024 1.341c1.63.74 3.851 1.233 6.32 1.38z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 8c0-2.828 0-4.243-.879-5.121C16.743 2 15.328 2 12.5 2h-1c-2.828 0-4.243 0-5.121.879C5.5 3.757 5.5 5.172 5.5 8v8q0 .532.002 1m12.996 0q.003-.468.002-1v-4"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleLineDuotoneIcon],svg[solar-smartphone-rotate-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 5H9" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.505 15.588a.75.75 0 1 0-.931-1.176zm8.495 5.1l.494.564a.75.75 0 0 0 0-1.129zm-1.5-1.313l.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm-7.75-5.25c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373l-1.5-1.312l-.988 1.128l1.5 1.313zm-1.5 2.441l1.5-1.312l-.988-1.129l-1.5 1.313zM9.75 19.375v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248c-.71-.322-1.232-.672-1.565-1.017c-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922c.509.526 1.21.972 2.024 1.341c1.63.74 3.851 1.233 6.32 1.38z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.96 15c.666.527 1.04 1.121 1.04 1.75c0 1.835-3.187 3.376-7.5 3.814" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.502 17q-.002-.468-.002-1V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h1c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v8q0 .532-.002 1"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleLinearIcon],svg[solar-smartphone-rotate-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 5H9"></svg:path><svg:path fill="currentColor" d="M21.426 14.412a.75.75 0 1 0-.931 1.176zm-17.92 1.176a.75.75 0 1 0-.932-1.176zm8.494 5.1l.494.564a.75.75 0 0 0 0-1.129zm-1.5-1.313l.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm3.924-2.183a.75.75 0 0 0 .152 1.493zm6.07-4.23c.574.455.756.856.756 1.163h1.5c0-.95-.567-1.738-1.324-2.338zM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373l-1.5-1.312l-.988 1.128l1.5 1.313zm-1.5 2.441l1.5-1.312l-.988-1.129l-1.5 1.313zM21.25 16.75c0 .457-.425 1.112-1.719 1.76c-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459c1.379-.69 2.547-1.723 2.547-3.101zm-11.5 2.625v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248c-.71-.322-1.232-.672-1.565-1.017c-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922c.509.526 1.21.972 2.024 1.341c1.63.74 3.851 1.233 6.32 1.38z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.502 17q-.002-.468-.002-1V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h1c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v8q0 .532-.002 1"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleOutlineIcon],svg[solar-smartphone-rotate-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.445 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v8.056q0 .532.002 1.003a.75.75 0 1 0 1.5-.008Q6.25 16.533 6.25 16V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h1c1.435 0 2.437.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v8q0 .532-.002.996a.75.75 0 0 0 1.5.008q.003-.471.002-1.002V7.945c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z"></svg:path><svg:path fill="currentColor" d="M8.25 5A.75.75 0 0 1 9 4.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 5m-4.623 9.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162c0 .243.11.538.44.88c.334.345.856.695 1.566 1.017c1.254.569 2.988 1 4.994 1.187v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.312A.75.75 0 0 1 9.75 22v-.66c-2.185-.191-4.14-.659-5.614-1.327c-.814-.369-1.515-.815-2.024-1.34c-.511-.53-.862-1.179-.862-1.923c0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122m16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338c0 1.378-1.168 2.41-2.547 3.101c-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 1 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307c1.294-.648 1.719-1.303 1.719-1.76c0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054"></svg:path>`,
})
export class SolarSmartphoneRotateAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationBoldIcon],svg[solar-smartphone-rotate-orientation-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.847 3.57C2 4.417 2 5.78 2 8.506v7.71c0 2.727 0 4.09.847 4.937S5.057 22 7.783 22h.964c2.726 0 4.09 0 4.936-.847s.847-2.21.847-4.936v-7.71c0-2.727 0-4.09-.847-4.937s-2.21-.847-4.936-.847h-.964c-2.726 0-4.09 0-4.936.847m3.008 1.322a.723.723 0 1 0 0 1.445h4.82a.723.723 0 0 0 0-1.445zm2.41 14.216a1.446 1.446 0 1 0 0-2.891a1.446 1.446 0 0 0 0 2.891m13.012-2.891c0 2.726 0 4.089-.847 4.936c-.451.45-1.682.664-2.982.765c-.89.069-1.336.103-1.645-.183s-.309-.755-.309-1.691v-7.642c0-.937 0-1.405.308-1.691s.754-.253 1.646-.187c1.3.097 2.531.305 2.982.756c.847.847.847 2.21.847 4.937m-2.169-1.928a.723.723 0 1 0-1.445 0v3.856a.723.723 0 1 0 1.445 0zM15.745 2.602a.723.723 0 0 1 .834-.592C19.663 2.535 22 5.25 22 8.506a.723.723 0 0 1-1.128.599l-1.445-.977a.723.723 0 1 1 .81-1.198l.095.065c-.556-1.84-2.1-3.237-3.995-3.56a.723.723 0 0 1-.592-.833" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotateOrientationBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationBoldDuotoneIcon],svg[solar-smartphone-rotate-orientation-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.43 21.152c.847-.847.847-2.21.847-4.936s0-4.09-.847-4.936c-.45-.451-1.681-.66-2.982-.756c-.892-.066-1.338-.1-1.646.187c-.308.286-.308.754-.308 1.69v7.642c0 .937 0 1.405.31 1.691c.308.286.754.252 1.644.183c1.3-.1 2.531-.314 2.982-.765" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.109 14.29a.723.723 0 0 0-1.446 0v3.855a.723.723 0 1 0 1.446 0z"></svg:path><svg:path fill="currentColor" d="M2 8.506c0-2.726 0-4.09.847-4.936s2.21-.847 4.936-.847h.964c2.726 0 4.09 0 4.936.847c.847.846.847 2.21.847 4.936v7.71c0 2.727 0 4.09-.847 4.937S11.473 22 8.747 22h-.964c-2.726 0-4.09 0-4.936-.847S2 18.943 2 16.217z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.856 4.892a.723.723 0 0 0 0 1.445h4.819a.723.723 0 0 0 0-1.445zm2.409 14.216a1.446 1.446 0 1 0 0-2.891a1.446 1.446 0 0 0 0 2.891"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.745 2.602a.723.723 0 0 1 .834-.592c3.084.525 5.42 3.24 5.42 6.496a.723.723 0 0 1-1.127.599l-1.446-.977a.723.723 0 0 1 .81-1.198l.096.065c-.556-1.84-2.101-3.237-3.996-3.56a.723.723 0 0 1-.591-.833" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotateOrientationBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationBrokenIcon],svg[solar-smartphone-rotate-orientation-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 14v2c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h1c2.828 0 4.243 0 5.121-.879C15 20.243 15 18.828 15 16V8c0-2.828 0-4.243-.879-5.121C13.243 2 11.828 2 9 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2m15.5.007c1.86.027 2.914.165 3.621.872C22 11.758 22 13.172 22 16s0 4.243-.879 5.122c-.707.707-1.761.845-3.621.872M11 5H6m13 13v-4"></svg:path><svg:path d="M10 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateOrientationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationLineDuotoneIcon],svg[solar-smartphone-rotate-orientation-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h1c2.828 0 4.243 0 5.121.879C15 3.757 15 5.172 15 8v8c0 2.828 0 4.243-.879 5.121C13.243 22 11.828 22 9 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16z"></svg:path><svg:path stroke-linecap="round" d="M17.5 10.007c1.86.027 2.914.165 3.621.872C22 11.758 22 13.172 22 16s0 4.243-.879 5.122c-.707.707-1.761.845-3.621.872"></svg:path><svg:path stroke-linecap="round" d="M11 5H6m13 13v-4" opacity=".5"></svg:path><svg:path d="M10 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateOrientationLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationLinearIcon],svg[solar-smartphone-rotate-orientation-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h1c2.828 0 4.243 0 5.121.879C15 3.757 15 5.172 15 8v8c0 2.828 0 4.243-.879 5.121C13.243 22 11.828 22 9 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16z"></svg:path><svg:path stroke-linecap="round" d="M17.5 10.007c1.86.027 2.914.165 3.621.872C22 11.758 22 13.172 22 16s0 4.243-.879 5.122c-.707.707-1.761.845-3.621.872M11 5H6m13 13v-4"></svg:path><svg:path d="M10 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateOrientationLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationOutlineIcon],svg[solar-smartphone-rotate-orientation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865M7.946 1.25h1.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.368 0 2.47-.117 3.337c-.12.9-.38 1.658-.981 2.26c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-1.11c-1.367 0-2.47 0-3.337-.116c-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.601 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 5.563 2.75 6.564 2.75 8v8c0 1.436.002 2.437.103 3.192c.099.734.28 1.122.556 1.4c.277.276.665.456 1.4.555c.754.102 1.756.103 3.191.103h1c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.399c.101-.755.103-1.756.103-3.192V8c0-1.435-.002-2.436-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103M5.25 5A.75.75 0 0 1 6 4.25h5a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 5m11.5 4.996a.75.75 0 0 1 .76-.74c1.808.027 3.187.138 4.142 1.092c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.368 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.955.954-2.334 1.065-4.141 1.092a.75.75 0 1 1-.022-1.5c1.912-.028 2.642-.193 3.102-.653c.277-.277.457-.665.556-1.399c.101-.755.103-1.756.103-3.192c0-1.435-.002-2.436-.103-3.192c-.099-.733-.28-1.122-.556-1.399c-.46-.46-1.19-.625-3.102-.652a.75.75 0 0 1-.739-.761M19 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-10.5 3.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotateOrientationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateBoldIcon],svg[solar-smartphone-update-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.796 5.045C3.13 2.798 4.924 1 7.199 1c1.363 0 2.567.656 3.374 1.66a.757.757 0 0 1-.118 1.066a.76.76 0 0 1-1.068-.117c-.55-.684-1.334-1.093-2.188-1.093c-1.343 0-2.553 1.043-2.863 2.534a.757.757 0 0 1 .465 1.263l-.74.81a.76.76 0 0 1-1.122 0l-.74-.81a.757.757 0 0 1 .597-1.268m8.344-.81a.76.76 0 0 1 .561.247l.74.809a.757.757 0 0 1-.597 1.269c-.333 2.246-2.127 4.044-4.403 4.044c-1.268 0-2.4-.568-3.2-1.456a.757.757 0 0 1 .056-1.07a.76.76 0 0 1 1.074.056c.54.6 1.274.954 2.07.954c1.343 0 2.553-1.042 2.863-2.534a.757.757 0 0 1-.465-1.263l.74-.809a.76.76 0 0 1 .561-.247"></svg:path><svg:path d="M21 11.868v4.044c0 3.813 0 5.72-1.187 6.904S16.715 24 12.893 24s-5.732 0-6.92-1.184c-1.186-1.185-1.186-3.091-1.186-6.904V14.18c0-.269 0-.403.025-.514a1.01 1.01 0 0 1 .763-.76c.11-.026.246-.026.515-.026c1.614 0 2.42 0 3.087-.151a6.07 6.07 0 0 0 4.578-4.568c.152-.665.152-1.469.152-3.077c0-.266 0-.4.026-.512a1.02 1.02 0 0 1 .78-.762c.112-.024.242-.021.5-.016c2.332.047 3.682.255 4.6 1.17C21 6.15 21 8.056 21 11.869m-11.147 8.34a.76.76 0 1 0 0 1.517h6.08a.759.759 0 1 0 0-1.516z"></svg:path></svg:g>`,
})
export class SolarSmartphoneUpdateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateBoldDuotoneIcon],svg[solar-smartphone-update-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#solarSmartphoneUpdateBoldDuotone0)"><svg:path fill-rule="evenodd" d="M11.14 4.235a.76.76 0 0 1 .562.247l.74.81a.757.757 0 0 1-.598 1.268c-.333 2.246-2.127 4.045-4.403 4.045c-1.267 0-2.4-.569-3.2-1.457a.757.757 0 0 1 .057-1.07a.76.76 0 0 1 1.073.056c.54.6 1.274.954 2.07.954c1.343 0 2.553-1.042 2.863-2.533a.757.757 0 0 1-.465-1.264l.74-.809a.76.76 0 0 1 .561-.247" clip-rule="evenodd"></svg:path><svg:path d="M7.2 1C4.923 1 3.13 2.798 2.795 5.045a.759.759 0 0 0-.597 1.268l.74.81a.76.76 0 0 0 1.122 0l.74-.81a.757.757 0 0 0-.465-1.263c.31-1.491 1.52-2.534 2.863-2.534c.854 0 1.639.41 2.188 1.093a.76.76 0 0 0 1.068.117a.757.757 0 0 0 .118-1.066C9.766 1.656 8.562 1 7.199 1"></svg:path><svg:path d="M21 11.869v4.044c0 3.812 0 5.719-1.187 6.903c-1.187 1.185-3.098 1.185-6.92 1.185c-3.82 0-5.732 0-6.919-1.185c-1.187-1.184-1.187-3.09-1.187-6.903V14.18c0-.268 0-.402.026-.513a1.01 1.01 0 0 1 .762-.761c.111-.026.246-.026.515-.026c1.614 0 2.42 0 3.088-.151a6.07 6.07 0 0 0 4.577-4.567c.152-.665.152-1.47.152-3.077c0-.267 0-.4.026-.513c.088-.379.398-.682.78-.762c.113-.023.242-.02.5-.015c2.332.047 3.682.254 4.6 1.17C21 6.15 21 8.055 21 11.87" opacity=".4"></svg:path><svg:path d="M9.094 20.967a.76.76 0 0 1 .76-.758h6.08a.76.76 0 1 1 0 1.517h-6.08a.76.76 0 0 1-.76-.759"></svg:path></svg:g><svg:defs><svg:clippath id="solarSmartphoneUpdateBoldDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarSmartphoneUpdateBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateBrokenIcon],svg[solar-smartphone-update-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarSmartphoneUpdateBroken0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 10c0-3.771 0-5.657-1.172-6.828C17.765 2.109 16.114 2.01 13 2m7 12c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.772 4 14v-2.999"></svg:path><svg:path fill="currentColor" d="M2.73 4h-.75zm0 .8l-.554.506a.75.75 0 0 0 1.108 0zm1.284-.294a.75.75 0 1 0-1.108-1.012zm-1.46-1.012a.75.75 0 0 0-1.108 1.012zM10.27 3.2l.554-.506a.75.75 0 0 0-1.108 0zm-1.284.294a.75.75 0 0 0 1.108 1.012zm1.46 1.012a.75.75 0 0 0 1.108-1.012zm-5.87 1.8A.75.75 0 0 0 3.461 7.31zM8.54 1.83A.75.75 0 0 0 9.71.892zM6.38-.75c-2.494 0-4.4 2.193-4.4 4.75h1.5c0-1.86 1.36-3.25 2.9-3.25zM1.981 4v.8h1.5V4zm1.303 1.306l.73-.8l-1.108-1.012l-.73.8zm0-1.012l-.73-.8l-1.108 1.012l.73.8zM6.62 8.75c2.494 0 4.4-2.193 4.4-4.75h-1.5c0 1.86-1.36 3.25-2.9 3.25zM11.02 4v-.8h-1.5V4zM9.717 2.694l-.73.8l1.108 1.012l.73-.8zm0 1.012l.73.8l1.108-1.012l-.73-.8zM3.46 7.309c.79.879 1.908 1.441 3.158 1.441v-1.5c-.785 0-1.509-.35-2.043-.944zM9.71.892C8.914-.1 7.726-.75 6.381-.75v1.5c.843 0 1.617.404 2.159 1.08z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 19H9"></svg:path></svg:g><svg:defs><svg:clippath id="solarSmartphoneUpdateBroken0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarSmartphoneUpdateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateLineDuotoneIcon],svg[solar-smartphone-update-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarSmartphoneUpdateLineDuotone0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 2.001c3.114.01 4.765.108 5.828 1.17C20 4.344 20 6.23 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.772 4 14v-2.999"></svg:path><svg:path fill="currentColor" d="M2.73 4h-.75zm0 .8l-.554.506a.75.75 0 0 0 1.108 0zm1.284-.294a.75.75 0 1 0-1.108-1.012zm-1.46-1.012a.75.75 0 0 0-1.108 1.012zM8.54 1.83A.75.75 0 0 0 9.71.892zM6.38-.75c-2.494 0-4.4 2.193-4.4 4.75h1.5c0-1.86 1.36-3.25 2.9-3.25zM1.981 4v.8h1.5V4zm1.303 1.306l.73-.8l-1.108-1.012l-.73.8zm0-1.012l-.73-.8l-1.108 1.012l.73.8zM9.71.892C8.914-.1 7.726-.75 6.381-.75v1.5c.843 0 1.617.404 2.159 1.08z"></svg:path><svg:path fill="currentColor" d="m10.27 3.2l.554-.505a.75.75 0 0 0-1.108 0zm-1.284.295a.75.75 0 1 0 1.108 1.01zm1.46 1.01a.75.75 0 0 0 1.108-1.01zm-5.87 1.801A.75.75 0 0 0 3.461 7.31zM6.62 8.75c2.494 0 4.4-2.192 4.4-4.75h-1.5c0 1.861-1.36 3.25-2.9 3.25zM11.02 4v-.8h-1.5V4zM9.717 2.695l-.73.8l1.108 1.01l.73-.8zm0 1.01l.73.8l1.108-1.01l-.73-.8zM3.46 7.31c.79.878 1.908 1.44 3.158 1.44v-1.5c-.785 0-1.509-.35-2.043-.944z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 19H9" opacity=".5"></svg:path></svg:g><svg:defs><svg:clippath id="solarSmartphoneUpdateLineDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarSmartphoneUpdateLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateLinearIcon],svg[solar-smartphone-update-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarSmartphoneUpdateLinear0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 2.001c3.114.01 4.765.108 5.828 1.17C20 4.344 20 6.23 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.772 4 14v-2.999"></svg:path><svg:path fill="currentColor" d="M2.73 4h-.75zm0 .8l-.554.506a.75.75 0 0 0 1.108 0zm1.284-.294a.75.75 0 1 0-1.108-1.012zm-1.46-1.012a.75.75 0 0 0-1.108 1.012zM10.27 3.2l.554-.506a.75.75 0 0 0-1.108 0zm-1.284.294a.75.75 0 0 0 1.108 1.012zm1.46 1.012a.75.75 0 0 0 1.108-1.012zm-5.87 1.8A.75.75 0 0 0 3.461 7.31zM8.54 1.83A.75.75 0 0 0 9.71.892zM6.38-.75c-2.494 0-4.4 2.193-4.4 4.75h1.5c0-1.86 1.36-3.25 2.9-3.25zM1.981 4v.8h1.5V4zm1.303 1.306l.73-.8l-1.108-1.012l-.73.8zm0-1.012l-.73-.8l-1.108 1.012l.73.8zM6.62 8.75c2.494 0 4.4-2.193 4.4-4.75h-1.5c0 1.86-1.36 3.25-2.9 3.25zM11.02 4v-.8h-1.5V4zM9.717 2.694l-.73.8l1.108 1.012l.73-.8zm0 1.012l.73.8l1.108-1.012l-.73-.8zM3.46 7.309c.79.879 1.908 1.441 3.158 1.441v-1.5c-.785 0-1.509-.35-2.043-.944zM9.71.892C8.914-.1 7.726-.75 6.381-.75v1.5c.843 0 1.617.404 2.159 1.08z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 19H9"></svg:path></svg:g><svg:defs><svg:clippath id="solarSmartphoneUpdateLinear0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarSmartphoneUpdateLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateOutlineIcon],svg[solar-smartphone-update-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarSmartphoneUpdateOutline0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M2.035 3.25c.33-2.221 2.1-4 4.346-4C7.726-.75 8.914-.1 9.71.892a.75.75 0 1 1-1.17.938C7.998 1.154 7.224.75 6.38.75c-1.326 0-2.52 1.03-2.826 2.506a.75.75 0 0 1 .459 1.25l-.73.8a.75.75 0 0 1-1.108 0l-.73-.8a.75.75 0 0 1 .59-1.255M12.25 2a.75.75 0 0 1 .752-.748c1.547.004 2.8.03 3.807.2c1.028.175 1.872.512 2.55 1.19c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-3.055a.75.75 0 0 1 1.5 0V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.385-.385-.898-.629-1.74-.772c-.864-.146-1.993-.174-3.56-.18A.75.75 0 0 1 12.25 2m-1.98.451a.75.75 0 0 1 .554.244l.73.8a.75.75 0 0 1-.59 1.255c-.328 2.221-2.098 4-4.344 4c-1.25 0-2.368-.562-3.158-1.44a.75.75 0 1 1 1.115-1.004c.534.594 1.258.944 2.043.944c1.326 0 2.52-1.03 2.826-2.506a.75.75 0 0 1-.459-1.25l.73-.8a.75.75 0 0 1 .554-.244M8.25 19a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="solarSmartphoneUpdateOutline0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarSmartphoneUpdateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationBoldIcon],svg[solar-smartphone-vibration-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.879 2.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121S8.172 22 11 22h2c2.829 0 4.243 0 5.122-.879C19 20.243 19 18.828 19 16V8c0-2.828 0-4.243-.878-5.121C17.242 2 15.829 2 13 2h-2c-2.828 0-4.242 0-5.121.879M9.5 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM1.665 5.33a.75.75 0 0 1 1.006.335l.776 1.552a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.776 1.552a.75.75 0 1 1-1.342-.67l.777-1.553a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.777-1.553a.75.75 0 0 1 .336-1.006m20.67 0a.75.75 0 0 1 .336 1.005l-.776 1.553a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.776 1.553a.75.75 0 1 1-1.342.67l-.776-1.552a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.776-1.552a.75.75 0 0 1 1.007-.336" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneVibrationBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationBoldDuotoneIcon],svg[solar-smartphone-vibration-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.879 2.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16V8c0-2.828 0-4.243-.879-5.121C17.243 2 15.828 2 13 2h-2c-2.828 0-4.243 0-5.121.879" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.5 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.665 5.33a.75.75 0 0 1 1.006.335l.776 1.553a1.75 1.75 0 0 1 0 1.565l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.776 1.553a.75.75 0 0 1-1.342-.671l.777-1.553a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.553-1.106a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.553-1.106a.25.25 0 0 0 0-.224l-.777-1.552a.75.75 0 0 1 .336-1.007m20.67 0a.75.75 0 0 1 .336 1.006l-.776 1.552a.25.25 0 0 0 0 .224l.552 1.106a1.75 1.75 0 0 1 0 1.565l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.776 1.553a.75.75 0 0 1-1.342.67l-.776-1.552a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.553-1.106a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.776-1.553a.75.75 0 0 1 1.007-.336" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneVibrationBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationBrokenIcon],svg[solar-smartphone-vibration-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M19 10V8c0-2.828 0-4.243-.879-5.121C17.243 2 15.828 2 13 2h-2c-2.828 0-4.243 0-5.121.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16v-2m-4.5 5h-5"></svg:path><svg:path stroke-linejoin="round" d="m22 6l-.776 1.553a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894L22 18M2 6l.776 1.553a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894L2 18"></svg:path></svg:g>`,
})
export class SolarSmartphoneVibrationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationLineDuotoneIcon],svg[solar-smartphone-vibration-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke-linecap="round" d="M14.5 19h-5" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m22 6l-.776 1.553a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894L22 18M2 6l.776 1.553a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894L2 18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartphoneVibrationLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationLinearIcon],svg[solar-smartphone-vibration-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke-linecap="round" d="M14.5 19h-5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m22 6l-.776 1.553a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894L22 18M2 6l.776 1.553a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894L2 18"></svg:path></svg:g>`,
})
export class SolarSmartphoneVibrationLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationOutlineIcon],svg[solar-smartphone-vibration-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 1.25h2.11c1.368 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.982-2.26c.601-.602 1.36-.86 2.26-.981c.866-.117 1.969-.117 3.336-.117M7.808 2.853c-.733.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h2c1.436 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.4-.556c.276-.277.456-.665.555-1.4c.102-.755.103-1.756.103-3.191V8c0-1.435-.001-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.399-.556c-.755-.101-1.756-.103-3.192-.103h-2c-1.435 0-2.436.002-3.192.103M1.665 5.33a.75.75 0 0 1 1.006.336l.776 1.552a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.776 1.552a.75.75 0 1 1-1.342-.67l.777-1.553a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.777-1.553a.75.75 0 0 1 .336-1.006m20.67 0a.75.75 0 0 1 .336 1.006l-.776 1.553a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.776 1.553a.75.75 0 1 1-1.342.67l-.776-1.552a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.776-1.552a.75.75 0 0 1 1.007-.336M8.75 19a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneVibrationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleBoldIcon],svg[solar-smile-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-3.603-6.447a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmileCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleBoldDuotoneIcon],svg[solar-smile-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.397 15.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-6 0c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarSmileCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleBrokenIcon],svg[solar-smile-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarSmileCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleLineDuotoneIcon],svg[solar-smile-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarSmileCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleLinearIcon],svg[solar-smile-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse></svg:g>`,
})
export class SolarSmileCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleOutlineIcon],svg[solar-smile-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.147 3.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path>`,
})
export class SolarSmileCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareBoldIcon],svg[solar-smile-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m-1.603 5.053a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmileSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareBoldDuotoneIcon],svg[solar-smile-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.447 15.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path>`,
})
export class SolarSmileSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareBrokenIcon],svg[solar-smile-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSmileSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareLineDuotoneIcon],svg[solar-smile-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmileSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareLinearIcon],svg[solar-smile-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSmileSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareOutlineIcon],svg[solar-smile-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m1.784 12.627a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmileSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeBoldIcon],svg[solar-snowflake-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-2.78 2.78v4.391l3.802-2.195l1.018-3.798a.75.75 0 1 1 1.449.388l-.63 2.35l1.896-1.095a.75.75 0 0 1 .75 1.299L19.14 8.744l2.35.63a.75.75 0 0 1-.389 1.449l-3.798-1.018L13.5 12l3.802 2.195l3.798-1.018a.75.75 0 0 1 .388 1.45l-2.349.629l1.896 1.095a.75.75 0 1 1-.75 1.299l-1.896-1.095l.63 2.349a.75.75 0 0 1-1.449.388l-1.018-3.798L12.75 13.3v4.39l2.78 2.78a.75.75 0 1 1-1.06 1.061l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-4.391l-3.802 2.195l-1.018 3.798a.75.75 0 1 1-1.449-.388l.63-2.35l-1.896 1.096a.75.75 0 1 1-.75-1.3l1.896-1.094l-2.35-.63a.75.75 0 1 1 .389-1.448l3.798 1.017L10.5 12L6.698 9.805L2.9 10.823a.75.75 0 1 1-.388-1.45l2.349-.629L2.965 7.65a.75.75 0 0 1 .75-1.3L5.61 7.446l-.63-2.349a.75.75 0 0 1 1.45-.388l1.017 3.798L11.25 10.7V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSnowflakeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeBoldDuotoneIcon],svg[solar-snowflake-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v11.38l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M5.511 4.178a.75.75 0 0 1 .919.53l1.018 3.798L12 11.134l4.552-2.628l1.017-3.798a.75.75 0 1 1 1.45.389l-.63 2.349l1.896-1.095a.75.75 0 0 1 .75 1.3l-1.896 1.094l2.349.63a.75.75 0 1 1-.388 1.448l-3.798-1.018l-3.802 2.196l3.802 2.195l3.798-1.018a.75.75 0 1 1 .388 1.449l-2.35.63l1.897 1.094a.75.75 0 1 1-.75 1.3l-1.896-1.096l.63 2.35a.75.75 0 0 1-1.45.388l-1.017-3.798L12 12.867l-4.553 2.628l-1.017 3.798a.75.75 0 0 1-1.45-.388l.63-2.35l-1.896 1.095a.75.75 0 0 1-.75-1.299l1.896-1.095l-2.349-.629a.75.75 0 0 1 .388-1.449l3.798 1.018L10.5 12L6.698 9.805L2.9 10.823a.75.75 0 1 1-.389-1.449l2.35-.63L2.963 7.65a.75.75 0 0 1 .75-1.299L5.61 7.446l-.629-2.35a.75.75 0 0 1 .53-.918" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSnowflakeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeBrokenIcon],svg[solar-snowflake-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v16m0 4v-4m0 0l3 3m-3-3l-3 3m6-18l-3 3l-3-3M3.34 7l3.464 2m0 0l10.392 6M6.804 9L5.706 4.902M6.804 9l-4.098 1.098M17.196 15l3.464 2m-3.464-2l4.098-1.098M17.196 15l1.098 4.099M20.66 7l-3.464 2m0 0L6.804 15m10.392-6l1.098-4.098M17.196 9l4.098 1.098M6.804 15L3.34 17m3.464-2l-4.098-1.098M6.804 15l-1.098 4.1"></svg:path>`,
})
export class SolarSnowflakeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeLineDuotoneIcon],svg[solar-snowflake-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 2v16m0 4v-4m0 0l3 3m-3-3l-3 3m6-18l-3 3l-3-3"></svg:path><svg:path d="m3.34 7l3.464 2m0 0L12 12M6.804 9L5.706 4.902M6.804 9l-4.098 1.098M12 12l5.196 3M12 12l5.196-3M12 12l-5.196 3m10.392 0l3.464 2m-3.464-2l4.098-1.098M17.196 15l1.098 4.099M20.66 7l-3.464 2m0 0l1.098-4.098M17.196 9l4.098 1.098M6.804 15L3.34 17m3.464-2l-4.098-1.098M6.804 15l-1.098 4.1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSnowflakeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeLinearIcon],svg[solar-snowflake-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v16m0 4v-4m0 0l3 3m-3-3l-3 3m6-18l-3 3l-3-3M3.34 7l3.464 2m0 0l10.392 6M6.804 9L5.706 4.902M6.804 9l-4.098 1.098M17.196 15l3.464 2m-3.464-2l4.098-1.098M17.197 15l1.098 4.099M20.66 7l-3.464 2m0 0L6.804 15m10.392-6l1.098-4.098M17.196 9l4.098 1.098M6.804 15L3.34 17m3.464-2l-4.098-1.098M6.804 15l-1.098 4.1"></svg:path>`,
})
export class SolarSnowflakeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeOutlineIcon],svg[solar-snowflake-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-2.78 2.78v4.391l3.802-2.195l1.018-3.798a.75.75 0 1 1 1.449.388l-.63 2.35l1.896-1.095a.75.75 0 0 1 .75 1.299L19.14 8.744l2.35.63a.75.75 0 0 1-.389 1.449l-3.798-1.018L13.5 12l3.802 2.195l3.798-1.018a.75.75 0 0 1 .388 1.45l-2.349.629l1.896 1.095a.75.75 0 1 1-.75 1.299l-1.896-1.095l.63 2.349a.75.75 0 0 1-1.449.388l-1.018-3.798L12.75 13.3v4.39l2.78 2.78a.75.75 0 1 1-1.06 1.061l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-4.391l-3.802 2.195l-1.018 3.798a.75.75 0 1 1-1.449-.388l.63-2.35l-1.896 1.096a.75.75 0 1 1-.75-1.3l1.896-1.094l-2.35-.63a.75.75 0 1 1 .389-1.448l3.798 1.017L10.5 12L6.698 9.805L2.9 10.823a.75.75 0 1 1-.388-1.45l2.349-.629L2.965 7.65a.75.75 0 0 1 .75-1.3L5.61 7.446l-.63-2.349a.75.75 0 0 1 1.45-.388l1.017 3.798L11.25 10.7V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSnowflakeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketBoldIcon],svg[solar-socket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.75 12a5.25 5.25 0 0 1 4.5-5.197V7.5a.75.75 0 0 0 1.5 0v-.697a5.251 5.251 0 0 1 0 10.394V16.5a.75.75 0 0 0-1.5 0v.697A5.25 5.25 0 0 1 6.75 12M15 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 5.25a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5"></svg:path></svg:g>`,
})
export class SolarSocketBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketBoldDuotoneIcon],svg[solar-socket-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 7.5V5.29a6.751 6.751 0 0 0 0 13.418V16.5a.75.75 0 1 1 1.5 0v2.209a6.751 6.751 0 0 0 0-13.418V7.5a.75.75 0 0 1-1.5 0M15 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarSocketBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketBrokenIcon],svg[solar-socket-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.584 9.413a6 6 0 1 1 0 5.174M12 18v-1.5m0-9V6"></svg:path><svg:circle cx="14" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="12" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarSocketBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketLineDuotoneIcon],svg[solar-socket-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 18v-1.5m0-9V6" opacity=".5"></svg:path><svg:circle cx="14" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="12" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarSocketLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketLinearIcon],svg[solar-socket-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 18v-1.5m0-9V6"></svg:path><svg:circle cx="14" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="12" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarSocketLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketOutlineIcon],svg[solar-socket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m4.637 3.877a5.251 5.251 0 0 0 0 10.394V16.5a.75.75 0 0 1 1.5 0v.697a5.251 5.251 0 0 0 0-10.394V7.5a.75.75 0 0 1-1.5 0zM5.25 12a6.75 6.75 0 1 1 13.5 0a6.75 6.75 0 0 1-13.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarSocketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2BoldIcon],svg[solar-sofa-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v-1a3 3 0 0 0-2.993-3c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2.25v8zm5.75 0H17v-1a3 3 0 0 1 2.993-3a4.6 4.6 0 0 0-.07-.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5h-2.25z"></svg:path><svg:path fill="currentColor" d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092"></svg:path>`,
})
export class SolarSofa2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2BoldDuotoneIcon],svg[solar-sofa-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 14h4.45a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h4.45V5h1.5z"></svg:path><svg:path fill="currentColor" d="M17.2 14h-4.45V5H15c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.043.214.062.452.07.78H20v1a2 2 0 0 0-2 2v1.2a.8.8 0 0 1-.8.8m-5.95 0H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-1.993-2V9c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2.25z" opacity=".5"></svg:path>`,
})
export class SolarSofa2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2BrokenIcon],svg[solar-sofa-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 18H5.556A3.556 3.556 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444A3.556 3.556 0 0 1 18.444 18H12"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10"></svg:path><svg:path fill="currentColor" d="M12.75 11a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zm0 4v3h1.5v-3zm0-6v2h1.5V5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 19v-1M4 19v-1"></svg:path></svg:g>`,
})
export class SolarSofa2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2LineDuotoneIcon],svg[solar-sofa-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5.556 18h12.888A3.556 3.556 0 0 0 22 14.444V12a2 2 0 1 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 1 0-4 0v2.444A3.556 3.556 0 0 0 5.556 18Z"></svg:path><svg:path fill="currentColor" d="m16.78 5.077l-.146.735zm3.143 3.143l.736-.147zM7.22 5.077l.146.735zM4.077 8.22l.735.146zM9 5.75h6v-1.5H9zm6 0c.965 0 1.338.004 1.634.062l.293-1.47C16.45 4.245 15.893 4.25 15 4.25zM20.75 10c0-.893.004-1.45-.091-1.927l-1.471.293c.058.296.062.669.062 1.634zm-4.116-4.188a3.25 3.25 0 0 1 2.554 2.554l1.47-.293a4.75 4.75 0 0 0-3.731-3.732zM9 4.25c-.893 0-1.45-.004-1.927.091l.293 1.471c.296-.058.669-.062 1.634-.062zM4.75 10c0-.965.004-1.338.062-1.634l-1.47-.293C3.245 8.55 3.25 9.107 3.25 10zm2.323-5.659a4.75 4.75 0 0 0-3.732 3.732l1.471.293a3.25 3.25 0 0 1 2.554-2.554zM11.25 5v9h1.5V5z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 19v-1M4 19v-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSofa2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2LinearIcon],svg[solar-sofa-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.556 18h12.888A3.556 3.556 0 0 0 22 14.444V12a2 2 0 1 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 1 0-4 0v2.444A3.556 3.556 0 0 0 5.556 18Z"></svg:path><svg:path d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10m8-5v9"></svg:path><svg:path stroke-linecap="round" d="M20 19v-1M4 19v-1"></svg:path></svg:g>`,
})
export class SolarSofa2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2OutlineIcon],svg[solar-sofa-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.905 4.25h6.19c.838 0 1.372 0 1.832.091a4.75 4.75 0 0 1 3.732 3.732l-.736.147l.736-.147c.07.35.086.743.09 1.28A2.75 2.75 0 0 1 22.75 12v2.444c0 1.53-.798 2.874-2 3.637V19a.75.75 0 0 1-1.5 0v-.325q-.392.075-.806.075H5.556q-.414 0-.806-.075V19a.75.75 0 0 1-1.5 0v-.919a4.3 4.3 0 0 1-2-3.636V12c0-1.26.846-2.32 2.001-2.647c.004-.537.02-.93.09-1.28a4.75 4.75 0 0 1 3.732-3.732c.46-.091.994-.091 1.832-.091M4.752 9.354A2.75 2.75 0 0 1 6.75 12v1.2c0 .028.022.05.05.05h4.45v-7.5H9c-.965 0-1.338.004-1.634.062a3.25 3.25 0 0 0-2.554 2.554c-.043.218-.056.479-.06.988M12.75 5.75v7.5h4.45a.05.05 0 0 0 .05-.05V12c0-1.258.845-2.319 1.998-2.646c-.004-.51-.017-.77-.06-.988a3.25 3.25 0 0 0-2.554-2.554c-.296-.058-.669-.062-1.634-.062zm-8.75 5c-.69 0-1.25.56-1.25 1.25v2.444a2.806 2.806 0 0 0 2.806 2.806h12.888a2.806 2.806 0 0 0 2.806-2.806V12a1.25 1.25 0 0 0-2.5 0v1.2a1.55 1.55 0 0 1-1.55 1.55H6.8a1.55 1.55 0 0 1-1.55-1.55V12c0-.69-.56-1.25-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarSofa2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BoldIcon],svg[solar-sofa-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 12.75c.967-3.884 1.396-5.903.384-7.322a4 4 0 0 0-.215-.275C18.722 3.75 16.481 3.75 12 3.75s-6.72 0-7.918 1.403q-.114.133-.215.275c-1.012 1.42-.583 3.438.384 7.322zm-15 5v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2z"></svg:path>`,
})
export class SolarSofa3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BoldDuotoneIcon],svg[solar-sofa-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 17.75v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2z"></svg:path><svg:path fill="currentColor" d="M19.75 12.75c.966-3.884 1.395-5.903.384-7.322a4 4 0 0 0-.215-.275C18.72 3.75 16.48 3.75 11.999 3.75s-6.721 0-7.919 1.403q-.113.133-.215.275c-1.011 1.42-.582 3.438.385 7.322l.2 1h15.1z" opacity=".5"></svg:path>`,
})
export class SolarSofa3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BrokenIcon],svg[solar-sofa-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 18h9a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4h3m-2.5-4l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4q1.083-.002 2 .006M19.5 14l.075-.299c1.086-4.347 1.63-6.52.559-8.023a4 4 0 0 0-.215-.275c-.462-.54-1.078-.873-1.919-1.078M20 20v-2M4 20v-2"></svg:path>`,
})
export class SolarSofa3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3LineDuotoneIcon],svg[solar-sofa-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4Z"></svg:path><svg:path d="m4.5 14l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403q.112.133.214.275c1.07 1.502.527 3.676-.56 8.023L19.5 14" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M20 20v-2M4 20v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSofa3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3LinearIcon],svg[solar-sofa-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4Zm.5-4l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403q.112.133.214.275c1.07 1.502.527 3.676-.56 8.023L19.5 14"></svg:path><svg:path stroke-linecap="round" d="M20 20v-2M4 20v-2"></svg:path></svg:g>`,
})
export class SolarSofa3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3OutlineIcon],svg[solar-sofa-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.94 3.25h.12c2.19 0 3.912 0 5.234.182c1.35.187 2.425.58 3.196 1.484q.135.158.255.327c.69.967.81 2.105.664 3.46c-.131 1.213-.491 2.713-.958 4.584a2.75 2.75 0 0 1 .299 5.36V20a.75.75 0 0 1-1.5 0v-1.25H4.75V20a.75.75 0 0 1-1.5 0v-1.354a2.751 2.751 0 0 1 .299-5.36c-.467-1.87-.827-3.37-.958-4.582c-.147-1.356-.025-2.494.664-3.461q.12-.17.255-.327c.771-.903 1.846-1.297 3.196-1.484C8.028 3.25 9.75 3.25 11.94 3.25m-6.854 10h13.828c.514-2.055.878-3.547 1.004-4.708c.129-1.194-.013-1.894-.395-2.428a3 3 0 0 0-.174-.224c-.427-.5-1.071-.807-2.26-.972c-1.207-.166-2.826-.168-5.089-.168s-3.882.002-5.088.168c-1.19.165-1.834.472-2.26.972q-.093.108-.175.224c-.382.534-.524 1.234-.395 2.428c.126 1.161.49 2.653 1.004 4.708M4 14.75a1.25 1.25 0 1 0 0 2.5h16a1.25 1.25 0 1 0 0-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSofa3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaBoldIcon],svg[solar-sofa-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12v1h10v-1a3 3 0 0 1 2.993-3a4.6 4.6 0 0 0-.07-.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22a4.6 4.6 0 0 0-.07.78A3 3 0 0 1 7 12"></svg:path><svg:path fill="currentColor" d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092"></svg:path>`,
})
export class SolarSofaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaBoldDuotoneIcon],svg[solar-sofa-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092"></svg:path><svg:path fill="currentColor" d="M4.007 9c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h6c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.043.214.062.452.07.78H20v1a2 2 0 0 0-2 2v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-2-2V9z" opacity=".5"></svg:path>`,
})
export class SolarSofaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaBrokenIcon],svg[solar-sofa-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 18H5.556A3.556 3.556 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444A3.556 3.556 0 0 1 18.444 18H12"></svg:path><svg:path d="M15 5c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143C20 8.606 20 9.07 20 10M4 10c0-.93 0-1.394.077-1.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2m9 14v-1M4 19v-1"></svg:path></svg:g>`,
})
export class SolarSofaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaLineDuotoneIcon],svg[solar-sofa-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.556 18h12.888A3.556 3.556 0 0 0 22 14.444V12a2 2 0 1 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 1 0-4 0v2.444A3.556 3.556 0 0 0 5.556 18Z"></svg:path><svg:path d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M20 19v-1M4 19v-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSofaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaLinearIcon],svg[solar-sofa-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.556 18h12.888A3.556 3.556 0 0 0 22 14.444V12a2 2 0 1 0-4 0v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 1 0-4 0v2.444A3.556 3.556 0 0 0 5.556 18Z"></svg:path><svg:path d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10"></svg:path><svg:path stroke-linecap="round" d="M20 19v-1M4 19v-1"></svg:path></svg:g>`,
})
export class SolarSofaLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaOutlineIcon],svg[solar-sofa-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.905 4.25h6.19c.838 0 1.372 0 1.832.091a4.75 4.75 0 0 1 3.732 3.732l-.736.147l.736-.147c.07.35.086.743.09 1.28A2.75 2.75 0 0 1 22.75 12v2.444c0 1.53-.798 2.874-2 3.637V19a.75.75 0 0 1-1.5 0v-.325q-.392.075-.806.075H5.556q-.414 0-.806-.075V19a.75.75 0 0 1-1.5 0v-.919a4.3 4.3 0 0 1-2-3.636V12c0-1.26.846-2.32 2.001-2.647c.004-.537.02-.93.09-1.28a4.75 4.75 0 0 1 3.732-3.732c.46-.091.994-.091 1.832-.091M4.752 9.354A2.75 2.75 0 0 1 6.75 12v1.2c0 .028.022.05.05.05h10.4a.05.05 0 0 0 .05-.05V12c0-1.258.845-2.319 1.998-2.646c-.004-.51-.017-.77-.06-.988a3.25 3.25 0 0 0-2.554-2.554c-.296-.058-.669-.062-1.634-.062H9c-.965 0-1.338.004-1.634.062a3.25 3.25 0 0 0-2.554 2.554c-.043.218-.056.479-.06.988M4 10.75c-.69 0-1.25.56-1.25 1.25v2.444a2.806 2.806 0 0 0 2.806 2.806h12.888a2.806 2.806 0 0 0 2.806-2.806V12a1.25 1.25 0 0 0-2.5 0v1.2a1.55 1.55 0 0 1-1.55 1.55H6.8a1.55 1.55 0 0 1-1.55-1.55V12c0-.69-.56-1.25-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarSofaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortBoldIcon],svg[solar-sort-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M14.75 16a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75M16 12.75a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5zM18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortBoldDuotoneIcon],svg[solar-sort-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarSortBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortBrokenIcon],svg[solar-sort-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 7H9M2 7h3m14 5h-3M5 12h7m4 5H8"></svg:path>`,
})
export class SolarSortBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetBoldIcon],svg[solar-sort-by-alphabet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7m14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442m-1.704 6.364h3.408L16.5 8.828zM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortByAlphabetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetBoldDuotoneIcon],svg[solar-sort-by-alphabet-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 0 0 1.368.616l1.438-3.194h4.757l1.437 3.194a.75.75 0 0 0 1.368-.616zM16.5 8.828l-1.703 3.786h3.407z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path>`,
})
export class SolarSortByAlphabetBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetBrokenIcon],svg[solar-sort-by-alphabet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 7H3m7 5H3m5 5H3"></svg:path><svg:path fill="currentColor" d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944l.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694l4.5-10l-1.368-.616l-4.5 10zm9-.616l-1.636-3.636l-1.368.615l1.636 3.637zm-1.636-3.636l-2.864-6.364l-1.368.616l2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"></svg:path></svg:g>`,
})
export class SolarSortByAlphabetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetLineDuotoneIcon],svg[solar-sort-by-alphabet-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 7H3m7 5H3m5 5H3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944l.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694l4.5-10l-1.368-.616l-4.5 10zm9-.616l-1.636-3.636l-1.368.615l1.636 3.637zm-1.636-3.636l-2.864-6.364l-1.368.616l2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"></svg:path></svg:g>`,
})
export class SolarSortByAlphabetLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetLinearIcon],svg[solar-sort-by-alphabet-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 7H3m7 5H3m5 5H3"></svg:path><svg:path fill="currentColor" d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944l.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694l4.5-10l-1.368-.616l-4.5 10zm9-.616l-1.636-3.636l-1.368.615l1.636 3.637zm-1.636-3.636l-2.864-6.364l-1.368.616l2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"></svg:path></svg:g>`,
})
export class SolarSortByAlphabetLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetOutlineIcon],svg[solar-sort-by-alphabet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7m14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442m-1.704 6.364h3.408L16.5 8.828zM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortByAlphabetOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeBoldIcon],svg[solar-sort-by-time-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M17 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.846c0 .18.065.355.183.491l1 1.154a.75.75 0 0 0 1.134-.982l-.817-.943z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortByTimeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeBoldDuotoneIcon],svg[solar-sort-by-time-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.846c0 .18.065.355.183.491l1 1.154a.75.75 0 0 0 1.134-.982l-.817-.943z"></svg:path><svg:path d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSortByTimeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeBrokenIcon],svg[solar-sort-by-time-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 7H2m6 5H2m8 5H2"></svg:path><svg:circle cx="17" cy="12" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 10v1.846L18 13"></svg:path></svg:g>`,
})
export class SolarSortByTimeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeLineDuotoneIcon],svg[solar-sort-by-time-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 7H2m6 5H2m8 5H2" opacity=".5"></svg:path><svg:circle cx="17" cy="12" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 10v1.846L18 13"></svg:path></svg:g>`,
})
export class SolarSortByTimeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeLinearIcon],svg[solar-sort-by-time-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 7H2m6 5H2m8 5H2"></svg:path><svg:circle cx="17" cy="12" r="5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 10v1.846L18 13"></svg:path></svg:g>`,
})
export class SolarSortByTimeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeOutlineIcon],svg[solar-sort-by-time-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7M17 7.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5M11.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0M17 9.25a.75.75 0 0 1 .75.75v1.566l.817.943a.75.75 0 0 1-1.134.982l-1-1.154a.75.75 0 0 1-.183-.49V10a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortByTimeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopBoldIcon],svg[solar-sort-from-bottom-to-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.763 3.289a.75.75 0 0 1 .837.261l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .513-.711M3.25 8A.75.75 0 0 1 4 7.25h9a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8m2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m2 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortFromBottomToTopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopBoldDuotoneIcon],svg[solar-sort-from-bottom-to-top-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 20.75a.75.75 0 0 0 .75-.75V6.25l1.65 2.2a.75.75 0 1 0 1.2-.9l-3-4a.75.75 0 0 0-1.35.45v16c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.25 8c0 .414.336.75.75.75h9a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75"></svg:path><svg:path fill="currentColor" d="M5.25 13c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0-.75.75" opacity=".7"></svg:path><svg:path fill="currentColor" d="M7.25 18c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75" opacity=".4"></svg:path>`,
})
export class SolarSortFromBottomToTopBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopBrokenIcon],svg[solar-sort-from-bottom-to-top-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 8h9m-7 5h7m-5 5h5"></svg:path><svg:path stroke-linejoin="round" d="M17 20V4l3 4"></svg:path></svg:g>`,
})
export class SolarSortFromBottomToTopBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopLineDuotoneIcon],svg[solar-sort-from-bottom-to-top-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 8h9"></svg:path><svg:path d="M6 13h7" opacity=".7"></svg:path><svg:path d="M8 18h5" opacity=".4"></svg:path><svg:path stroke-linejoin="round" d="M17 20V4l3 4"></svg:path></svg:g>`,
})
export class SolarSortFromBottomToTopLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopLinearIcon],svg[solar-sort-from-bottom-to-top-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 8h9m-7 5h7m-5 5h5"></svg:path><svg:path stroke-linejoin="round" d="M17 20V4l3 4"></svg:path></svg:g>`,
})
export class SolarSortFromBottomToTopLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopOutlineIcon],svg[solar-sort-from-bottom-to-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.763 3.289a.75.75 0 0 1 .837.261l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .513-.711M13 8.75H4v-1.5h9zm0 5H6v-1.5h7zm0 5H8v-1.5h5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortFromBottomToTopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomBoldIcon],svg[solar-sort-from-top-to-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m-2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m-2 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortFromTopToBottomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomBoldDuotoneIcon],svg[solar-sort-from-top-to-bottom-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.25 16a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M5.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" opacity=".7"></svg:path><svg:path fill="currentColor" d="M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6" opacity=".4"></svg:path>`,
})
export class SolarSortFromTopToBottomBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomBrokenIcon],svg[solar-sort-from-top-to-bottom-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 16h9m-7-5h7M8 6h5"></svg:path><svg:path stroke-linejoin="round" d="M17 4v16l3-4"></svg:path></svg:g>`,
})
export class SolarSortFromTopToBottomBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomLineDuotoneIcon],svg[solar-sort-from-top-to-bottom-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 16h9"></svg:path><svg:path d="M6 11h7" opacity=".7"></svg:path><svg:path d="M8 6h5" opacity=".3"></svg:path><svg:path stroke-linejoin="round" d="M17 4v16l3-4"></svg:path></svg:g>`,
})
export class SolarSortFromTopToBottomLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomLinearIcon],svg[solar-sort-from-top-to-bottom-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 16h9m-7-5h7M8 6h5"></svg:path><svg:path stroke-linejoin="round" d="M17 4v16l3-4"></svg:path></svg:g>`,
})
export class SolarSortFromTopToBottomLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomOutlineIcon],svg[solar-sort-from-top-to-bottom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m-2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m-2 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortFromTopToBottomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalBoldIcon],svg[solar-sort-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z"></svg:path><svg:path fill="currentColor" d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z"></svg:path>`,
})
export class SolarSortHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalBoldDuotoneIcon],svg[solar-sort-horizontal-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z"></svg:path><svg:path fill="currentColor" d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z" opacity=".5"></svg:path>`,
})
export class SolarSortHorizontalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalBrokenIcon],svg[solar-sort-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 8l4.125-4M6 8l4.125 4M6 8h7m5 0h-2m2 8l-4.125-4M18 16l-4.125 4M18 16h-7m-5 0h2"></svg:path>`,
})
export class SolarSortHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalLineDuotoneIcon],svg[solar-sort-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 8H6m0 0l4.125-4M6 8l4.125 4"></svg:path><svg:path d="M6 16h12m0 0l-4.125-4M18 16l-4.125 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSortHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalLinearIcon],svg[solar-sort-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8H6m0 0l4.125-4M6 8l4.125 4M6 16h12m0 0l-4.125-4M18 16l-4.125 4"></svg:path>`,
})
export class SolarSortHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalOutlineIcon],svg[solar-sort-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.663 3.478a.75.75 0 0 1-.016 1.06L7.851 7.25H18a.75.75 0 0 1 0 1.5H7.85l2.797 2.712a.75.75 0 1 1-1.044 1.076l-4.125-4a.75.75 0 0 1 0-1.076l4.125-4a.75.75 0 0 1 1.06.016m2.674 8a.75.75 0 0 1 1.06-.016l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4a.75.75 0 1 1-1.044-1.076l2.796-2.712H6a.75.75 0 0 1 0-1.5h10.15l-2.797-2.712a.75.75 0 0 1-.016-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortLineDuotoneIcon],svg[solar-sort-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 7H2"></svg:path><svg:path d="M19 12H5" opacity=".5"></svg:path><svg:path d="M16 17H8"></svg:path></svg:g>`,
})
export class SolarSortLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortLinearIcon],svg[solar-sort-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 7H2m17 5H5m11 5H8"></svg:path>`,
})
export class SolarSortLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortOutlineIcon],svg[solar-sort-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h20a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m-3 5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalBoldIcon],svg[solar-sort-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z"></svg:path><svg:path fill="currentColor" d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z"></svg:path>`,
})
export class SolarSortVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalBoldDuotoneIcon],svg[solar-sort-vertical-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z"></svg:path><svg:path fill="currentColor" d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z" opacity=".5"></svg:path>`,
})
export class SolarSortVerticalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalBrokenIcon],svg[solar-sort-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18v-2m0-10l4 4.125M16 6l-4 4.125M16 6v7m-8 5l4-4.125M8 18l-4-4.125M8 18v-7m0-5v2"></svg:path>`,
})
export class SolarSortVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalLineDuotoneIcon],svg[solar-sort-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 18V6m0 0l4 4.125M16 6l-4 4.125" opacity=".5"></svg:path><svg:path d="M8 6v12m0 0l4-4.125M8 18l-4-4.125"></svg:path></svg:g>`,
})
export class SolarSortVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalLinearIcon],svg[solar-sort-vertical-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18V6m0 0l4 4.125M16 6l-4 4.125M8 6v12m0 0l4-4.125M8 18l-4-4.125"></svg:path>`,
})
export class SolarSortVerticalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalOutlineIcon],svg[solar-sort-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 5.25a.75.75 0 0 1 .538.228l4 4.125a.75.75 0 1 1-1.076 1.044L16.75 7.851V18a.75.75 0 0 1-1.5 0V7.85l-2.712 2.797a.75.75 0 1 1-1.076-1.044l4-4.125A.75.75 0 0 1 16 5.25m-8 0a.75.75 0 0 1 .75.75v10.15l2.712-2.797a.75.75 0 1 1 1.076 1.044l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125a.75.75 0 1 1 1.076-1.044l2.712 2.796V6A.75.75 0 0 1 8 5.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveBoldIcon],svg[solar-soundwave-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-4 3a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25m8 0a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-12 4a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveBoldDuotoneIcon],svg[solar-soundwave-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-8 7a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0z" opacity=".5"></svg:path>`,
})
export class SolarSoundwaveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveBrokenIcon],svg[solar-soundwave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4v16m4-13v2m0 8v-4m-8 4v-2m0-8v4m12 0v2M4 11v2"></svg:path>`,
})
export class SolarSoundwaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleBoldIcon],svg[solar-soundwave-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m.75 5a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleBoldDuotoneIcon],svg[solar-soundwave-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" opacity=".5"><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m.75 5a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path><svg:path d="M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 1a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"></svg:path></svg:g><svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 1a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarSoundwaveCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleBrokenIcon],svg[solar-soundwave-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v10m5-7v4M7 9v6M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarSoundwaveCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleLineDuotoneIcon],svg[solar-soundwave-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 7v10m5-7v4M7 9v6"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSoundwaveCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleLinearIcon],svg[solar-soundwave-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 7v10m5-7v4M7 9v6"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path></svg:g>`,
})
export class SolarSoundwaveCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleOutlineIcon],svg[solar-soundwave-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5m0 3.5a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 1a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveLineDuotoneIcon],svg[solar-soundwave-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 4v16"></svg:path><svg:path d="M16 7v10M8 7v10" opacity=".5"></svg:path><svg:path d="M20 11v2M4 11v2"></svg:path></svg:g>`,
})
export class SolarSoundwaveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveLinearIcon],svg[solar-soundwave-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4v16m4-13v10M8 7v10m12-6v2M4 11v2"></svg:path>`,
})
export class SolarSoundwaveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveOutlineIcon],svg[solar-soundwave-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-4 3a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25m8 0a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-12 4a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareBoldIcon],svg[solar-soundwave-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareBoldDuotoneIcon],svg[solar-soundwave-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarSoundwaveSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareBrokenIcon],svg[solar-soundwave-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v10m5-7v4M7 9v6m15-3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarSoundwaveSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareLineDuotoneIcon],svg[solar-soundwave-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 7v10m5-7v4M7 9v6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSoundwaveSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareLinearIcon],svg[solar-soundwave-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 7v10m5-7v4M7 9v6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSoundwaveSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareOutlineIcon],svg[solar-soundwave-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 1a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerBoldIcon],svg[solar-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.75 15.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm5.25-2.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M12 11.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerBoldDuotoneIcon],svg[solar-speaker-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M8.25 15.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerBrokenIcon],svg[solar-speaker-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 12v2c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"></svg:path><svg:path d="M14 7.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarSpeakerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerLineDuotoneIcon],svg[solar-speaker-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" opacity=".5"></svg:path><svg:path d="M14 7.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarSpeakerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerLinearIcon],svg[solar-speaker-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path d="M14 7.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarSpeakerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticBoldIcon],svg[solar-speaker-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm3.25 4a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticBoldDuotoneIcon],svg[solar-speaker-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 9.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticBrokenIcon],svg[solar-speaker-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 12v2c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"></svg:path><svg:path d="M16 14a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M10 6h4"></svg:path></svg:g>`,
})
export class SolarSpeakerMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticLineDuotoneIcon],svg[solar-speaker-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" opacity=".5"></svg:path><svg:path d="M16 14a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M10 6h4"></svg:path></svg:g>`,
})
export class SolarSpeakerMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticLinearIcon],svg[solar-speaker-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path d="M16 14a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M10 6h4"></svg:path></svg:g>`,
})
export class SolarSpeakerMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticOutlineIcon],svg[solar-speaker-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M7.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6M12 10.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M7.25 14a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerOutlineIcon],svg[solar-speaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M7.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14M12 6.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 7.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M12 13.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 15.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsBoldIcon],svg[solar-special-effects-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M6.75 11.25H10a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6.75zm4.8-3.85a.75.75 0 0 1 1.05.15l2.4 3.2l2.4-3.2a.75.75 0 1 1 1.2.9L15.937 12l2.663 3.55a.75.75 0 1 1-1.2.9l-2.4-3.2l-2.4 3.2a.75.75 0 1 1-1.2-.9L14.062 12L11.4 8.45a.75.75 0 0 1 .15-1.05" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpecialEffectsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsBoldDuotoneIcon],svg[solar-special-effects-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6.75v2.5H10a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 1 1-1.5 0zm6.3-.6a.75.75 0 0 1 1.05.15l2.4 3.2l2.4-3.2a.75.75 0 0 1 1.2.9L15.937 12l2.663 3.55a.75.75 0 1 1-1.2.9l-2.4-3.2l-2.4 3.2a.75.75 0 1 1-1.2-.9L14.062 12L11.4 8.45a.75.75 0 0 1 .15-1.05"></svg:path>`,
})
export class SolarSpecialEffectsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsBrokenIcon],svg[solar-special-effects-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6 8v-.75a.75.75 0 0 0-.75.75zm4 .75a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0-1.5zm8.6-4.3a.75.75 0 1 0-1.2-.9zm-7.2 7.1a.75.75 0 1 0 1.2.9zm1.2-8a.75.75 0 1 0-1.2.9zm4.8 8.9a.75.75 0 1 0 1.2-.9zM5.25 16a.75.75 0 0 0 1.5 0zM6 8.75h4v-1.5H6zm0 4h4v-1.5H6zm11.4-5.2l-3 4l1.2.9l3-4zm-3 4l-3 4l1.2.9l3-4zm-3-3.1l3 4l1.2-.9l-3-4zm3 4l3 4l1.2-.9l-3-4zM5.25 8v4h1.5V8zm0 4v4h1.5v-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSpecialEffectsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsLineDuotoneIcon],svg[solar-special-effects-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 8v-.75a.75.75 0 0 0-.75.75zm4 .75a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0-1.5zm8.6-4.3a.75.75 0 1 0-1.2-.9zm-7.2 7.1a.75.75 0 1 0 1.2.9zm1.2-8a.75.75 0 1 0-1.2.9zm4.8 8.9a.75.75 0 1 0 1.2-.9zM5.25 16a.75.75 0 0 0 1.5 0zM6 8.75h4v-1.5H6zm0 4h4v-1.5H6zm11.4-5.2l-3 4l1.2.9l3-4zm-3 4l-3 4l1.2.9l3-4zm-3-3.1l3 4l1.2-.9l-3-4zm3 4l3 4l1.2-.9l-3-4zM5.25 8v4h1.5V8zm0 4v4h1.5v-4z"></svg:path></svg:g>`,
})
export class SolarSpecialEffectsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsLinearIcon],svg[solar-special-effects-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M6 8v-.75a.75.75 0 0 0-.75.75zm4 .75a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0-1.5zm8.6-4.3a.75.75 0 1 0-1.2-.9zm-7.2 7.1a.75.75 0 1 0 1.2.9zm1.2-8a.75.75 0 1 0-1.2.9zm4.8 8.9a.75.75 0 1 0 1.2-.9zM5.25 16a.75.75 0 0 0 1.5 0zM6 8.75h4v-1.5H6zm0 4h4v-1.5H6zm11.4-5.2l-3 4l1.2.9l3-4zm-3 4l-3 4l1.2.9l3-4zm-3-3.1l3 4l1.2-.9l-3-4zm3 4l3 4l1.2-.9l-3-4zM5.25 8v4h1.5V8zm0 4v4h1.5v-4z"></svg:path></svg:g>`,
})
export class SolarSpecialEffectsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsOutlineIcon],svg[solar-special-effects-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 7.55a.75.75 0 1 0-1.2.9L14.062 12L11.4 15.55a.75.75 0 1 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 1 0 1.2-.9L15.937 12L18.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2zM6 7.25a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-3.25H10a.75.75 0 0 0 0-1.5H6.75v-2.5H10a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpecialEffectsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowBoldIcon],svg[solar-spedometer-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A10 10 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.96 9.96 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.96 9.96 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0a.75.75 0 0 1 0 1.062L5.46 19.578A10 10 0 0 0 12 22a10 10 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062a.753.753 0 0 1 1.063 0l1.556 1.553A9.96 9.96 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.96 9.96 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A10 10 0 0 0 12.752 2zm1.059 6.157a3 3 0 0 1 0 4.249c-.447.446-1.375.757-2.353.972c-1.462.322-2.194.482-2.776-.1c-.582-.58-.422-1.311-.1-2.772c.215-.976.528-1.903.974-2.349a3.01 3.01 0 0 1 4.255 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerLowBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowBoldDuotoneIcon],svg[solar-spedometer-low-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.811 14.38a3 3 0 0 0 0-4.248a3.01 3.01 0 0 0-4.254 0c-.447.446-.76 1.373-.974 2.35c-.322 1.46-.483 2.19.1 2.772c.582.581 1.313.42 2.776.1c.978-.216 1.905-.527 2.352-.974"></svg:path><svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.42 5.476q.49-.566 1.057-1.055l.053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5zM2.028 12.75a10 10 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5zm3.448 6.83a10 10 0 0 1-1.055-1.056l.049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5zm14.104-1.056q-.49.566-1.056 1.055l-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5zm2.392-7.274a10 10 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5zm-3.448-6.83q.566.49 1.055 1.056l-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5zM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0"></svg:path>`,
})
export class SolarSpedometerLowBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowBrokenIcon],svg[solar-spedometer-low-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346c-.32 1.459-.481 2.188.1 2.77c.58.58 1.31.42 2.768.098c.975-.214 1.9-.525 2.346-.971Z"></svg:path><svg:path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542"></svg:path></svg:g>`,
})
export class SolarSpedometerLowBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowLineDuotoneIcon],svg[solar-spedometer-low-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2" opacity=".5"></svg:path><svg:path d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346c-.32 1.459-.481 2.188.1 2.77c.58.58 1.31.42 2.768.098c.975-.214 1.9-.525 2.346-.971Z"></svg:path></svg:g>`,
})
export class SolarSpedometerLowLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowLinearIcon],svg[solar-spedometer-low-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M13.778 14.364a3 3 0 1 0-4.242-4.243c-.446.446-.757 1.371-.972 2.346c-.32 1.459-.481 2.188.1 2.77c.58.58 1.31.42 2.768.098c.976-.214 1.9-.525 2.346-.971Z"></svg:path></svg:g>`,
})
export class SolarSpedometerLowLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowOutlineIcon],svg[solar-spedometer-low-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.78 11.25H4a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.239l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.989-2.2l-1.02-1.02a.75.75 0 1 1 1.061-1.06l1.02 1.019a9.2 9.2 0 0 0 2.17-5.239H20a.75.75 0 0 1 0-1.5h1.22a9.2 9.2 0 0 0-2.17-5.239l-1.02 1.02a.75.75 0 1 1-1.06-1.061l1.019-1.02a9.2 9.2 0 0 0-5.239-2.17V4a.75.75 0 0 1-1.5 0V2.78a9.2 9.2 0 0 0-5.239 2.17l1.02 1.02A.75.75 0 0 1 5.97 7.03L4.95 6.011a9.2 9.2 0 0 0-2.17 5.239M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.755-2.41a3.75 3.75 0 1 1 5.304 5.304c-.331.33-.786.566-1.231.74c-.459.18-.975.322-1.485.434l-.066.014c-.672.148-1.282.283-1.795.292c-.594.01-1.134-.143-1.599-.608c-.464-.464-.618-1.005-.607-1.598c.009-.513.143-1.124.291-1.796l.015-.066a10 10 0 0 1 .433-1.484c.175-.446.41-.9.74-1.231m4.243 1.062a2.25 2.25 0 0 0-3.182 0c-.115.115-.259.345-.405.717c-.14.36-.262.794-.364 1.26c-.168.76-.265 1.22-.272 1.565c-.004.28.053.395.169.512s.23.173.512.168c.344-.006.805-.104 1.565-.271c.466-.103.9-.224 1.259-.365c.372-.146.603-.29.718-.404a2.25 2.25 0 0 0 0-3.182" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerLowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxBoldIcon],svg[solar-spedometer-max-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A10 10 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.96 9.96 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.96 9.96 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0a.75.75 0 0 1 0 1.062L5.46 19.578A10 10 0 0 0 12 22a10 10 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062a.753.753 0 0 1 1.063 0l1.556 1.553A9.96 9.96 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.96 9.96 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A10 10 0 0 0 12.752 2zm-2.637 6.13a3 3 0 0 0 0 4.248c.447.446 1.374.758 2.352.973c1.463.32 2.194.481 2.777-.1c.582-.582.421-1.312.1-2.773c-.216-.976-.528-1.903-.975-2.349a3.01 3.01 0 0 0-4.254 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerMaxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxBoldDuotoneIcon],svg[solar-spedometer-max-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.115 14.353a3 3 0 0 1 0-4.249a3.01 3.01 0 0 1 4.254 0c.447.446.76 1.373.975 2.35c.321 1.46.482 2.19-.1 2.772s-1.314.42-2.776.1c-.978-.216-1.906-.527-2.353-.974"></svg:path><svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.42 5.476q.49-.566 1.057-1.055l.053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5zM2.028 12.75a10 10 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5zm3.448 6.83a10 10 0 0 1-1.055-1.056l.049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5zm14.104-1.056q-.49.566-1.056 1.055l-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5zm2.392-7.274a10 10 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5zm-3.448-6.83q.566.49 1.055 1.056l-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5zM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0"></svg:path>`,
})
export class SolarSpedometerMaxBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxBrokenIcon],svg[solar-spedometer-max-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.446.757 1.371.971 2.346c.321 1.459.482 2.188-.099 2.77c-.58.58-1.31.42-2.769.098c-.975-.214-1.9-.525-2.346-.971Z"></svg:path><svg:path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542"></svg:path></svg:g>`,
})
export class SolarSpedometerMaxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxLineDuotoneIcon],svg[solar-spedometer-max-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2" opacity=".5"></svg:path><svg:path d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.446.757 1.371.971 2.346c.321 1.459.482 2.188-.099 2.77c-.58.58-1.31.42-2.769.098c-.975-.214-1.9-.525-2.346-.971Z"></svg:path></svg:g>`,
})
export class SolarSpedometerMaxLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxLinearIcon],svg[solar-spedometer-max-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.446.757 1.371.971 2.346c.321 1.459.482 2.188-.099 2.77c-.58.58-1.31.42-2.769.098c-.975-.214-1.9-.525-2.346-.971Z"></svg:path></svg:g>`,
})
export class SolarSpedometerMaxLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxOutlineIcon],svg[solar-spedometer-max-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.78 11.25H4a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.239l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.989-2.2l-1.02-1.02a.75.75 0 1 1 1.061-1.06l1.02 1.019a9.2 9.2 0 0 0 2.17-5.239H20a.75.75 0 0 1 0-1.5h1.22a9.2 9.2 0 0 0-2.17-5.239l-1.02 1.02a.75.75 0 1 1-1.06-1.061l1.019-1.02a9.2 9.2 0 0 0-5.239-2.17V4a.75.75 0 0 1-1.5 0V2.78a9.2 9.2 0 0 0-5.239 2.17l1.02 1.02A.75.75 0 0 1 5.97 7.03L4.95 6.011a9.2 9.2 0 0 0-2.17 5.239M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m12.584-1.348a2.25 2.25 0 0 0-3.182 3.182c.115.115.345.258.718.404c.359.14.793.262 1.259.365c.76.167 1.22.265 1.565.27c.281.006.395-.051.512-.167s.173-.231.168-.512c-.006-.345-.104-.805-.271-1.565a8.6 8.6 0 0 0-.365-1.26c-.146-.372-.29-.602-.404-.717M9.59 9.59a3.75 3.75 0 0 1 5.303 0c.33.33.566.785.74 1.23c.18.46.322.976.434 1.485l.014.066c.148.672.283 1.283.292 1.796c.01.593-.143 1.134-.608 1.598s-1.005.618-1.598.608c-.513-.01-1.123-.144-1.796-.292l-.066-.014a10 10 0 0 1-1.484-.434c-.446-.174-.9-.41-1.231-.74a3.75 3.75 0 0 1 0-5.303" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerMaxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleBoldIcon],svg[solar-spedometer-middle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A10 10 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.96 9.96 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.96 9.96 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0a.75.75 0 0 1 0 1.062L5.46 19.578A10 10 0 0 0 12 22a10 10 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062a.753.753 0 0 1 1.063 0l1.556 1.553A9.96 9.96 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.96 9.96 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A10 10 0 0 0 12.752 2zm-.724 12.044a3.006 3.006 0 0 1-3.009-3.004c0-.63.436-1.506.975-2.349c.807-1.26 1.21-1.89 2.034-1.89s1.227.63 2.033 1.89c.54.843.975 1.718.975 2.35a3.006 3.006 0 0 1-3.008 3.003" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerMiddleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleBoldDuotoneIcon],svg[solar-spedometer-middle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.02 13.015a3.006 3.006 0 0 0 3.008 3.004a3.006 3.006 0 0 0 3.008-3.004c0-.631-.435-1.507-.974-2.35c-.807-1.26-1.21-1.89-2.034-1.89s-1.227.63-2.034 1.89c-.54.844-.974 1.719-.974 2.35"></svg:path><svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.42 5.476q.49-.566 1.057-1.055l.053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5zM2.028 12.75a10 10 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5zm3.448 6.83a10 10 0 0 1-1.055-1.056l.049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5zm14.104-1.056q-.49.566-1.056 1.055l-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5zm2.392-7.274a10 10 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5zm-3.448-6.83q.566.49 1.055 1.056l-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5zM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0"></svg:path>`,
})
export class SolarSpedometerMiddleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleBrokenIcon],svg[solar-spedometer-middle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542M19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346c.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z"></svg:path></svg:g>`,
})
export class SolarSpedometerMiddleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleLineDuotoneIcon],svg[solar-spedometer-middle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2" opacity=".5"></svg:path><svg:path d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346c.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z"></svg:path></svg:g>`,
})
export class SolarSpedometerMiddleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleLinearIcon],svg[solar-spedometer-middle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2"></svg:path><svg:path d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346c.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z"></svg:path></svg:g>`,
})
export class SolarSpedometerMiddleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleOutlineIcon],svg[solar-spedometer-middle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.78 11.25H4a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.239l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.989-2.2l-1.02-1.02a.75.75 0 1 1 1.061-1.06l1.02 1.019a9.2 9.2 0 0 0 2.17-5.239H20a.75.75 0 0 1 0-1.5h1.22a9.2 9.2 0 0 0-2.17-5.239l-1.02 1.02a.75.75 0 1 1-1.06-1.061l1.019-1.02a9.2 9.2 0 0 0-5.239-2.17V4a.75.75 0 0 1-1.5 0V2.78a9.2 9.2 0 0 0-5.239 2.17l1.02 1.02A.75.75 0 0 1 5.97 7.03L4.95 6.011a9.2 9.2 0 0 0-2.17 5.239M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m10.27-3.24c-.24.247-.497.642-.916 1.298a8.6 8.6 0 0 0-.632 1.148c-.16.367-.222.631-.222.794a2.25 2.25 0 0 0 4.5 0c0-.163-.062-.427-.222-.794a8.6 8.6 0 0 0-.632-1.148c-.42-.656-.676-1.05-.915-1.298c-.195-.203-.317-.243-.481-.243s-.286.04-.48.243m-1.08-1.042c.412-.427.903-.701 1.56-.701s1.148.274 1.56.7c.356.37.693.896 1.063 1.476l.037.057c.28.44.546.905.743 1.356c.192.439.347.927.347 1.394a3.75 3.75 0 1 1-7.5 0c0-.467.155-.955.347-1.394c.197-.451.462-.916.743-1.356l.036-.057c.371-.58.708-1.106 1.064-1.475" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerMiddleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2BoldIcon],svg[solar-square-academic-cap-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467l-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></svg:path><svg:path fill="currentColor" d="M5 12.915v3.71c0 1.008.503 1.952 1.385 2.44C7.854 19.88 10.204 21 12 21s4.146-1.121 5.615-1.934c.881-.489 1.385-1.433 1.385-2.44v-3.711l-4.146 1.944a6.67 6.67 0 0 1-5.708 0zm.545-4.475a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65c-.395.222-.734.482-.989.868c-.254.386-.36.8-.408 1.25C1 10.729 1 11.243 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421c.034-.315.093-.47.17-.586c.075-.115.195-.231.471-.387c.292-.164.689-.335 1.292-.593z"></svg:path>`,
})
export class SolarSquareAcademicCap2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2BoldDuotoneIcon],svg[solar-square-academic-cap-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467l-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></svg:path><svg:path fill="currentColor" d="M5.545 8.44a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65c-.395.222-.734.482-.989.868c-.254.386-.36.8-.408 1.25C1 10.729 1 11.243 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421c.034-.315.093-.47.17-.586c.075-.115.195-.231.471-.387c.292-.164.689-.335 1.292-.593z"></svg:path><svg:path fill="currentColor" d="M5 11.258L9.783 13.5a5.17 5.17 0 0 0 4.434 0L19 11.258v5.367c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.935C5.504 18.577 5 17.633 5 16.625z" opacity=".5"></svg:path>`,
})
export class SolarSquareAcademicCap2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2BrokenIcon],svg[solar-square-academic-cap-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.092 6.637L9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258"></svg:path><svg:path stroke-linejoin="round" d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42c.33-.501.919-.753 2.094-1.257L6 8"></svg:path><svg:path d="M12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5m14 0v5.125c0 1.008-.503 1.952-1.385 2.44a24 24 0 0 1-1.87.935"></svg:path></svg:g>`,
})
export class SolarSquareAcademicCap2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2LineDuotoneIcon],svg[solar-square-academic-cap-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.092 6.637L9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258"></svg:path><svg:path stroke-linejoin="round" d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42c.33-.501.919-.753 2.094-1.257L6 8" opacity=".5"></svg:path><svg:path d="M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareAcademicCap2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2LinearIcon],svg[solar-square-academic-cap-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.092 6.637L9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.692 3.137c1.455.682 1.455 3.044 0 3.726L14.218 13.5a5.17 5.17 0 0 1-4.435 0L5 11.258"></svg:path><svg:path stroke-linejoin="round" d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42c.33-.501.919-.753 2.094-1.257L6 8"></svg:path><svg:path d="M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5"></svg:path></svg:g>`,
})
export class SolarSquareAcademicCap2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2OutlineIcon],svg[solar-square-academic-cap-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.465 2.82a5.92 5.92 0 0 1 5.07 0l6.692 3.138c1.052.493 1.523 1.564 1.523 2.542s-.47 2.05-1.523 2.543l-1.477.692v4.89c0 1.253-.628 2.463-1.772 3.097c-.752.416-1.74.917-2.78 1.316c-1.027.394-2.164.712-3.198.712s-2.171-.318-3.199-.712c-1.04-.399-2.027-.9-2.779-1.316c-1.144-.634-1.772-1.844-1.772-3.097V11.5q0-.062.01-.122a.75.75 0 0 1 1.059-.8l4.782 2.243a4.42 4.42 0 0 0 3.798 0l6.691-3.137c.403-.189.66-.64.66-1.184s-.257-.995-.66-1.184L13.9 4.179a4.42 4.42 0 0 0-3.798 0l-6.69 3.137a.75.75 0 0 1-.638-1.358zM5.75 12.439v4.187c0 .763.379 1.441.999 1.785c.716.396 1.638.862 2.59 1.227c.963.37 1.899.613 2.661.613s1.698-.243 2.662-.613a21 21 0 0 0 2.59-1.227c.62-.344.998-1.022.998-1.785v-4.187l-3.714 1.741a5.92 5.92 0 0 1-5.071 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.69 7.705a.75.75 0 0 1-.395.984L5.22 9.15c-.603.259-1 .43-1.292.594c-.276.155-.396.271-.472.387s-.135.27-.169.585c-.036.333-.037.766-.037 1.422V15a.75.75 0 0 1-1.5 0v-2.901c0-.607 0-1.12.046-1.544c.048-.45.154-.864.408-1.25c.255-.386.594-.646.989-.868c.37-.209.843-.411 1.4-.65l1.112-.476a.75.75 0 0 1 .984.394"></svg:path>`,
})
export class SolarSquareAcademicCap2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapBoldIcon],svg[solar-square-academic-cap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L3.092 6.637c-1.076.504-1.357 1.927-.842 2.91V14.5a.75.75 0 0 0 1.5 0v-3.828L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></svg:path><svg:path fill="currentColor" d="M5 12.915v3.71c0 1.008.503 1.952 1.385 2.44C7.854 19.88 10.204 21 12 21s4.146-1.121 5.615-1.934c.882-.489 1.385-1.433 1.385-2.44v-3.711l-4.146 1.944a6.67 6.67 0 0 1-5.708 0z"></svg:path>`,
})
export class SolarSquareAcademicCapBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapBoldDuotoneIcon],svg[solar-square-academic-cap-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L3.092 6.637c-1.076.504-1.357 1.927-.842 2.91V14.5a.75.75 0 0 0 1.5 0v-3.828L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></svg:path><svg:path fill="currentColor" d="M5 11.258L9.783 13.5a5.17 5.17 0 0 0 4.434 0L19 11.258v5.367c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.935C5.504 18.577 5 17.633 5 16.625z" opacity=".5"></svg:path>`,
})
export class SolarSquareAcademicCapBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapBrokenIcon],svg[solar-square-academic-cap-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.783 3.5a5.17 5.17 0 0 1 4.434 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0l-6.691-3.137c-1.456-.682-1.456-3.044 0-3.726L6 5.273M2 8.5V14m10 7c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5m14 0v5.125c0 1.008-.503 1.952-1.385 2.44a24 24 0 0 1-1.87.935"></svg:path>`,
})
export class SolarSquareAcademicCapBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapLineDuotoneIcon],svg[solar-square-academic-cap-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.783 3.5a5.17 5.17 0 0 1 4.434 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0l-6.691-3.137c-1.456-.682-1.456-3.044 0-3.726z"></svg:path><svg:path stroke-linecap="round" d="M2 8.5V14m17-2.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareAcademicCapLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapLinearIcon],svg[solar-square-academic-cap-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.783 3.5a5.17 5.17 0 0 1 4.434 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0l-6.691-3.137c-1.456-.682-1.456-3.044 0-3.726z"></svg:path><svg:path stroke-linecap="round" d="M2 8.5V14m17-2.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5"></svg:path></svg:g>`,
})
export class SolarSquareAcademicCapLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapOutlineIcon],svg[solar-square-academic-cap-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.464 2.82a5.92 5.92 0 0 1 5.072 0l6.69 3.138C22.28 6.45 22.75 7.522 22.75 8.5s-.47 2.05-1.523 2.543l-1.477.692v4.89c0 1.253-.628 2.463-1.772 3.097c-.752.416-1.74.917-2.78 1.316c-1.027.394-2.164.712-3.198.712s-2.171-.318-3.199-.712c-1.04-.399-2.027-.9-2.779-1.316c-1.144-.634-1.772-1.844-1.772-3.097v-4.89l-1.477-.693l-.023-.01V14a.75.75 0 0 1-1.5 0V8.5c0-.978.471-2.05 1.523-2.542zM5.75 12.439v4.187c0 .763.379 1.441.999 1.785a21 21 0 0 0 2.59 1.227c.963.37 1.899.613 2.661.613s1.698-.243 2.662-.613a21 21 0 0 0 2.59-1.227c.62-.344.998-1.022.998-1.785v-4.187l-3.714 1.741a5.92 5.92 0 0 1-5.072 0zM3.41 9.684c-.403-.189-.66-.64-.66-1.184s.257-.995.66-1.184l6.691-3.137a4.42 4.42 0 0 1 3.798 0l6.691 3.137c.403.189.66.64.66 1.184s-.257.995-.66 1.184l-6.691 3.137a4.42 4.42 0 0 1-3.798 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAcademicCapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownBoldIcon],svg[solar-square-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M8.47 9.97a.75.75 0 0 1 1.06 0L12 12.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownBoldDuotoneIcon],svg[solar-square-alt-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.53 9.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L12 12.44z"></svg:path>`,
})
export class SolarSquareAltArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownBrokenIcon],svg[solar-square-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownLineDuotoneIcon],svg[solar-square-alt-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownLinearIcon],svg[solar-square-alt-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownOutlineIcon],svg[solar-square-alt-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M8.47 9.97a.75.75 0 0 1 1.06 0L12 12.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftBoldIcon],svg[solar-square-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftBoldDuotoneIcon],svg[solar-square-alt-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.03 14.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06L11.56 12z"></svg:path>`,
})
export class SolarSquareAltArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftBrokenIcon],svg[solar-square-alt-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13.5 9l-3 3l3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftLineDuotoneIcon],svg[solar-square-alt-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13.5 9l-3 3l3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftLinearIcon],svg[solar-square-alt-arrow-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13.5 9l-3 3l3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftOutlineIcon],svg[solar-square-alt-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightBoldIcon],svg[solar-square-alt-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M9.97 15.53a.75.75 0 0 1 0-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightBoldDuotoneIcon],svg[solar-square-alt-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.97 14.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06L12.44 12z"></svg:path>`,
})
export class SolarSquareAltArrowRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightBrokenIcon],svg[solar-square-alt-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.5 9l3 3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightLineDuotoneIcon],svg[solar-square-alt-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.5 9l3 3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightLinearIcon],svg[solar-square-alt-arrow-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.5 9l3 3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightOutlineIcon],svg[solar-square-alt-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M9.97 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpBoldIcon],svg[solar-square-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M8.47 14.03a.75.75 0 0 0 1.06 0L12 11.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpBoldDuotoneIcon],svg[solar-square-alt-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.47 14.03a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06L12 11.56z"></svg:path>`,
})
export class SolarSquareAltArrowUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpBrokenIcon],svg[solar-square-alt-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 13.5l-3-3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpLineDuotoneIcon],svg[solar-square-alt-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 13.5l-3-3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpLinearIcon],svg[solar-square-alt-arrow-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 13.5l-3-3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareAltArrowUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpOutlineIcon],svg[solar-square-alt-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M8.47 12.97l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 11.56l-2.47 2.47a.75.75 0 0 1-1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownBoldIcon],svg[solar-square-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 7.25a.75.75 0 0 1 .75.75v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownBoldDuotoneIcon],svg[solar-square-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 20.536C19.07 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72z"></svg:path>`,
})
export class SolarSquareArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownBrokenIcon],svg[solar-square-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownLineDuotoneIcon],svg[solar-square-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownLinearIcon],svg[solar-square-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownOutlineIcon],svg[solar-square-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M12 7.25a.75.75 0 0 1 .75.75v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftBoldIcon],svg[solar-square-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M16.75 12a.75.75 0 0 1-.75.75H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftBoldDuotoneIcon],svg[solar-square-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 11.25a.75.75 0 0 1 0 1.5H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72z"></svg:path>`,
})
export class SolarSquareArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftBrokenIcon],svg[solar-square-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M16 12H8m0 0l3-3m-3 3l3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownBoldIcon],svg[solar-square-arrow-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m5.708 12.114a.75.75 0 0 1-.75-.75v-4.242a.75.75 0 0 1 1.5 0v2.432l4.376-4.377a.75.75 0 0 1 1.06 1.06l-4.376 4.377h2.432a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownBoldDuotoneIcon],svg[solar-square-arrow-left-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.42 14.828c0 .414.337.75.75.75h4.244a.75.75 0 1 0 0-1.5h-2.432L15.358 9.7a.75.75 0 1 0-1.06-1.06L9.92 13.017v-2.432a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarSquareArrowLeftDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownBrokenIcon],svg[solar-square-arrow-left-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l-6 6m0 0v-4.5M9 15h4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownLineDuotoneIcon],svg[solar-square-arrow-left-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 9l-6 6m0 0v-4.5M9 15h4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownLinearIcon],svg[solar-square-arrow-left-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 9l-6 6m0 0v-4.5M9 15h4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownOutlineIcon],svg[solar-square-arrow-left-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m8.746 5.715a.75.75 0 0 1 0 1.06l-4.377 4.377h2.432a.75.75 0 0 1 0 1.5H9.172a.75.75 0 0 1-.75-.75v-4.242a.75.75 0 0 1 1.5 0v2.432l4.376-4.377a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftLineDuotoneIcon],svg[solar-square-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m0 0l3-3m-3 3l3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftLinearIcon],svg[solar-square-arrow-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m0 0l3-3m-3 3l3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftOutlineIcon],svg[solar-square-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M11.53 8.47a.75.75 0 0 1 0 1.06l-1.72 1.72H16a.75.75 0 0 1 0 1.5H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpBoldIcon],svg[solar-square-arrow-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M9.172 8.421a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.432l4.376 4.377a.75.75 0 0 0 1.06-1.06l-4.376-4.377h2.432a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpBoldDuotoneIcon],svg[solar-square-arrow-left-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.421 9.172a.75.75 0 0 1 .75-.75h4.243a.75.75 0 1 1 0 1.5h-2.432l4.377 4.376a.75.75 0 0 1-1.061 1.061L9.92 10.983v2.432a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarSquareArrowLeftUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpBrokenIcon],svg[solar-square-arrow-left-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 15L9 9m0 0h4.5M9 9v4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpLineDuotoneIcon],svg[solar-square-arrow-left-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 15L9 9m0 0h4.5M9 9v4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpLinearIcon],svg[solar-square-arrow-left-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 15L9 9m0 0h4.5M9 9v4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowLeftUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpOutlineIcon],svg[solar-square-arrow-left-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m1.809 6.246a.75.75 0 0 1 .75-.75h4.242a.75.75 0 0 1 0 1.5h-2.432l4.377 4.376a.75.75 0 0 1-1.06 1.06l-4.377-4.376v2.432a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightBoldIcon],svg[solar-square-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M7.25 12a.75.75 0 0 1 .75-.75h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightBoldDuotoneIcon],svg[solar-square-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 11.25a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72z"></svg:path>`,
})
export class SolarSquareArrowRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightBrokenIcon],svg[solar-square-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownBoldIcon],svg[solar-square-arrow-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 3.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464m-5.708 12.114a.75.75 0 0 0 .75-.75v-4.242a.75.75 0 0 0-1.5 0v2.432L9.702 8.64a.75.75 0 0 0-1.06 1.06l4.376 4.377h-2.432a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownBoldDuotoneIcon],svg[solar-square-arrow-right-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 20.536C19.07 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.579 14.828a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.432L8.642 9.7a.75.75 0 0 1 1.06-1.06l4.377 4.376v-2.432a.75.75 0 0 1 1.5 0z"></svg:path>`,
})
export class SolarSquareArrowRightDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownBrokenIcon],svg[solar-square-arrow-right-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 9l6 6m0 0v-4.5m0 4.5h-4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownLineDuotoneIcon],svg[solar-square-arrow-right-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 9l6 6m0 0v-4.5m0 4.5h-4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownLinearIcon],svg[solar-square-arrow-right-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 9l6 6m0 0v-4.5m0 4.5h-4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownOutlineIcon],svg[solar-square-arrow-right-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m2.028 5.715a.75.75 0 0 1 1.06 0l4.377 4.377v-2.432a.75.75 0 0 1 1.5 0v4.242a.75.75 0 0 1-.75.75h-4.242a.75.75 0 0 1 0-1.5h2.432L8.64 9.702a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightLineDuotoneIcon],svg[solar-square-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightLinearIcon],svg[solar-square-arrow-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightOutlineIcon],svg[solar-square-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M12.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpBoldIcon],svg[solar-square-arrow-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 20.536C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465M14.827 8.421a.75.75 0 0 1 .75.75v4.242a.75.75 0 0 1-1.5 0v-2.432L9.702 15.36a.75.75 0 1 1-1.06-1.06l4.376-4.377h-2.432a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpBoldDuotoneIcon],svg[solar-square-arrow-right-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.579 9.172a.75.75 0 0 0-.75-.75h-4.243a.75.75 0 1 0 0 1.5h2.432l-4.376 4.376a.75.75 0 0 0 1.06 1.061l4.377-4.376v2.432a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarSquareArrowRightUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpBrokenIcon],svg[solar-square-arrow-right-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 15l6-6m0 0h-4.5M15 9v4.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpLineDuotoneIcon],svg[solar-square-arrow-right-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 15l6-6m0 0h-4.5M15 9v4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpLinearIcon],svg[solar-square-arrow-right-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 15l6-6m0 0h-4.5M15 9v4.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowRightUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpOutlineIcon],svg[solar-square-arrow-right-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m3.223 6.246a.75.75 0 0 1 .75-.75h4.242a.75.75 0 0 1 .75.75v4.242a.75.75 0 0 1-1.5 0v-2.432L9.702 15.36a.75.75 0 1 1-1.06-1.06l4.376-4.377h-2.432a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpBoldIcon],svg[solar-square-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M12 16.75a.75.75 0 0 0 .75-.75V9.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V16c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpBoldDuotoneIcon],svg[solar-square-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72z"></svg:path>`,
})
export class SolarSquareArrowUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpBrokenIcon],svg[solar-square-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 16V8m0 0l3 3m-3-3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpLineDuotoneIcon],svg[solar-square-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 16V8m0 0l3 3m-3-3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpLinearIcon],svg[solar-square-arrow-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 16V8m0 0l3 3m-3-3l-3 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarSquareArrowUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpOutlineIcon],svg[solar-square-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M8.47 10.47l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownBoldIcon],svg[solar-square-bottom-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H9a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 12.984A2.25 2.25 0 0 1 5.25 15v.568l4.159-4.159a2.25 2.25 0 1 1 3.182 3.182L8.432 18.75H9A2.25 2.25 0 0 1 11.016 22H12c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12z"></svg:path>`,
})
export class SolarSquareBottomDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownBoldDuotoneIcon],svg[solar-square-bottom-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H9a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareBottomDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownBrokenIcon],svg[solar-square-bottom-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m11 13l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.178 21.894 17.055 21.993 13 22M2 11c.008-4.055.107-6.178 1.464-7.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareBottomDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownLineDuotoneIcon],svg[solar-square-bottom-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m11 13l-8 8m0 0h6m-6 0v-6"></svg:path></svg:g>`,
})
export class SolarSquareBottomDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownLinearIcon],svg[solar-square-bottom-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11"></svg:path><svg:path stroke-linejoin="round" d="m11 13l-8 8m0 0h6m-6 0v-6"></svg:path></svg:g>`,
})
export class SolarSquareBottomDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownOutlineIcon],svg[solar-square-bottom-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.828.829-1.238 1.868-1.448 3.167c-.207 1.276-.232 2.882-.236 4.898a.75.75 0 1 0 1.5.002c.004-2.04.032-3.523.217-4.66c.18-1.117.5-1.818 1.028-2.346c.57-.57 1.34-.897 2.618-1.069c1.3-.174 3.009-.176 5.387-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.067 2.619c.175 1.3.177 3.008.177 5.386s-.002 4.086-.177 5.386c-.171 1.279-.498 2.05-1.068 2.62c-.528.528-1.23.847-2.345 1.027c-1.138.184-2.621.213-4.661.216a.75.75 0 0 0 .002 1.5c2.015-.003 3.621-.028 4.898-.235c1.299-.21 2.338-.62 3.167-1.448c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19z"></svg:path><svg:path fill="currentColor" d="M9 21.75a.75.75 0 0 0 0-1.5H4.81l6.72-6.72a.75.75 0 1 0-1.06-1.06l-6.72 6.72V15a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"></svg:path>`,
})
export class SolarSquareBottomDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpBoldIcon],svg[solar-square-bottom-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.568 15.25l-3.205 3.205C2 16.991 2 14.961 2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-2.96 0-4.991 0-6.455-.363l3.205-3.205V19a2.25 2.25 0 0 0 4.5 0v-6A2.25 2.25 0 0 0 11 10.75H5a2.25 2.25 0 0 0 0 4.5z"></svg:path><svg:path fill="currentColor" d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarSquareBottomUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpBoldDuotoneIcon],svg[solar-square-bottom-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-4.19l-6.72 6.72a.75.75 0 0 1-1.06-1.06l6.72-6.72H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareBottomUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpBrokenIcon],svg[solar-square-bottom-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.178 21.894 17.055 21.993 13 22M2 11c.008-4.055.107-6.178 1.464-7.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path></svg:g>`,
})
export class SolarSquareBottomUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpLineDuotoneIcon],svg[solar-square-bottom-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path></svg:g>`,
})
export class SolarSquareBottomUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpLinearIcon],svg[solar-square-bottom-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11"></svg:path><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path></svg:g>`,
})
export class SolarSquareBottomUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpOutlineIcon],svg[solar-square-bottom-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.828.829-1.238 1.868-1.448 3.167c-.207 1.276-.232 2.882-.236 4.898a.75.75 0 1 0 1.5.002c.004-2.04.032-3.523.217-4.66c.18-1.117.5-1.818 1.028-2.346c.57-.57 1.34-.897 2.618-1.069c1.3-.174 3.009-.176 5.387-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.067 2.619c.175 1.3.177 3.008.177 5.386s-.002 4.086-.177 5.386c-.171 1.279-.498 2.05-1.068 2.62c-.528.528-1.23.847-2.345 1.027c-1.138.184-2.621.213-4.661.216a.75.75 0 0 0 .002 1.5c2.015-.003 3.621-.028 4.898-.235c1.299-.21 2.338-.62 3.167-1.448c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19z"></svg:path><svg:path fill="currentColor" d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarSquareBottomUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownBoldIcon],svg[solar-square-double-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M8.47 7.97a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06L12 10.44L9.53 7.97a.75.75 0 0 0-1.06 0m0 4a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L12 14.44l-2.47-2.47a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareDoubleAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownBoldDuotoneIcon],svg[solar-square-double-alt-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.47 11.97a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 14.44z"></svg:path><svg:path fill="currentColor" d="M14.47 7.97a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L12 10.44z"></svg:path>`,
})
export class SolarSquareDoubleAltArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownBrokenIcon],svg[solar-square-double-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 8.5l3 3l3-3m-6 4l3 3l3-3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarSquareDoubleAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownLineDuotoneIcon],svg[solar-square-double-alt-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 8.5l3 3l3-3m-6 4l3 3l3-3"></svg:path></svg:g>`,
})
export class SolarSquareDoubleAltArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownLinearIcon],svg[solar-square-double-alt-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 8.5l3 3l3-3m-6 4l3 3l3-3"></svg:path></svg:g>`,
})
export class SolarSquareDoubleAltArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownOutlineIcon],svg[solar-square-double-alt-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M8.47 7.97a.75.75 0 0 1 1.06 0L12 10.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06m0 4a.75.75 0 0 1 1.06 0L12 14.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareDoubleAltArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowLeftBoldIcon],svg[solar-square-double-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m14.03-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L13.56 12zm-4-1.06a.75.75 0 0 1 0 1.06L9.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareDoubleAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowLeftBoldDuotoneIcon],svg[solar-square-double-alt-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.03 9.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L9.56 12z"></svg:path><svg:path fill="currentColor" d="M16.03 9.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L13.56 12z"></svg:path>`,
})
export class SolarSquareDoubleAltArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
