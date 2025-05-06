import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCameraBoldIcon],svg[solar-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M12 9.273c-2.301 0-4.167 1.831-4.167 4.09S9.7 17.456 12 17.456s4.167-1.832 4.167-4.091S14.3 9.273 12 9.273m0 1.636c-1.38 0-2.5 1.099-2.5 2.455c0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454s-1.12-2.455-2.5-2.455m4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 0 1-.833.818h-1.111a.826.826 0 0 1-.834-.818" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraBoldDuotoneIcon],svg[solar-camera-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraBrokenIcon],svg[solar-camera-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path stroke-linecap="round" d="M2 13.364c0-3.065 0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06A3.4 3.4 0 0 1 2.277 18M19 10h-1"></svg:path></svg:g>`,
})
export class SolarCameraBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraLineDuotoneIcon],svg[solar-camera-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19 10h-1"></svg:path></svg:g>`,
})
export class SolarCameraLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraLinearIcon],svg[solar-camera-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"></svg:path><svg:path stroke-linecap="round" d="M19 10h-1"></svg:path></svg:g>`,
})
export class SolarCameraLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticBoldIcon],svg[solar-camera-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4c0-.552.413-1 .923-1h6.154c.51 0 .923.448.923 1s-.413 1-.923 1H8.923C8.413 5 8 4.552 8 4m1.778 17h4.444c3.121 0 4.682 0 5.803-.722a4.4 4.4 0 0 0 1.226-1.183C22 18.015 22 16.51 22 13.5s0-4.514-.75-5.595a4.4 4.4 0 0 0-1.225-1.183C18.904 6 17.343 6 14.222 6H9.778c-3.121 0-4.682 0-5.803.722A4.4 4.4 0 0 0 2.75 7.905C2 8.985 2 10.49 2 13.498v.002c0 3.01 0 4.514.749 5.595c.324.468.74.87 1.226 1.183C5.096 21 6.657 21 9.778 21m-1.945-7.5c0-2.22 1.866-4.018 4.167-4.018s4.167 1.799 4.167 4.018S14.3 17.518 12 17.518s-4.167-1.8-4.167-4.018m1.667 0c0-1.332 1.12-2.41 2.5-2.41s2.5 1.079 2.5 2.41s-1.12 2.41-2.5 2.41s-2.5-1.079-2.5-2.41m8.611-4.018c-.46 0-.833.36-.833.804c0 .443.373.803.833.803h.556c.46 0 .833-.36.833-.803s-.373-.804-.833-.804z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticBoldDuotoneIcon],svg[solar-camera-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarCameraMinimalisticBoldDuotone0"><svg:g fill="none"><svg:path fill="#fff" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.722a4.4 4.4 0 0 0 1.226-1.183C22 18.015 22 16.51 22 13.5s0-4.514-.75-5.595a4.4 4.4 0 0 0-1.225-1.183C18.904 6 17.343 6 14.222 6H9.778c-3.121 0-4.682 0-5.803.722A4.4 4.4 0 0 0 2.75 7.905C2 8.985 2 10.49 2 13.498v.002c0 3.01 0 4.514.749 5.595c.324.468.74.87 1.226 1.183C5.096 21 6.657 21 9.778 21" opacity=".5"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M8 4c0-.552.413-1 .923-1h6.154c.51 0 .923.448.923 1s-.413 1-.923 1H8.923C8.413 5 8 4.552 8 4" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M17.278 10.286c0-.444.373-.804.833-.804h.556c.46 0 .833.36.833.804s-.373.804-.833.804h-.556c-.46 0-.833-.36-.833-.804" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M7.834 13.5c0-2.219 1.865-4.018 4.166-4.018s4.167 1.8 4.167 4.018c0 2.22-1.866 4.018-4.167 4.018S7.834 15.72 7.834 13.5m1.666 0c0-1.331 1.12-2.41 2.5-2.41s2.5 1.079 2.5 2.41s-1.12 2.411-2.5 2.411s-2.5-1.08-2.5-2.41m8.611-4.019c-.46 0-.833.36-.833.804s.373.804.833.804h.556c.46 0 .833-.36.833-.804s-.373-.804-.833-.804z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarCameraMinimalisticBoldDuotone0)"></svg:path>`,
})
export class SolarCameraMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticBrokenIcon],svg[solar-camera-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path stroke-linecap="round" d="M3 13c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C5.787 6 7.19 6 10 6h4c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C21 8.787 21 10.19 21 13s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C18.213 20 16.81 20 14 20h-4c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104c-.232-.347-.384-.74-.484-1.222M18 10h-.5m-3-6.5h-5"></svg:path></svg:g>`,
})
export class SolarCameraMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticLineDuotoneIcon],svg[solar-camera-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path d="M10 20h4c2.809 0 4.214 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 20 7.19 20 10 20Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M18 10h-.5"></svg:path><svg:path stroke-linecap="round" d="M14.5 3.5h-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCameraMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticLinearIcon],svg[solar-camera-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path d="M10 20h4c2.809 0 4.214 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 20 7.19 20 10 20Z"></svg:path><svg:path stroke-linecap="round" d="M18 10h-.5M15 3H9"></svg:path></svg:g>`,
})
export class SolarCameraMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticOutlineIcon],svg[solar-camera-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1.208 1.75h4.083c1.37 0 2.454 0 3.32.088c.889.09 1.63.28 2.278.713c.518.346.964.792 1.31 1.31c.433.648.622 1.39.713 2.277c.088.867.088 1.952.088 3.322v.082c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088H9.958c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32v-.085c0-1.369 0-2.453.088-3.32c.09-.887.28-1.628.712-2.276a4.8 4.8 0 0 1 1.31-1.31c.65-.433 1.39-.622 2.278-.713c.866-.088 1.951-.088 3.32-.088M6.79 6.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.897c-.241.36-.39.826-.468 1.594c-.08.782-.08 1.79-.08 3.21V13c0 1.42 0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08h4c1.42 0 2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.595a3.3 3.3 0 0 0-.897-.897c-.36-.241-.826-.39-1.595-.467c-.782-.08-1.79-.08-3.21-.08h-4c-1.42 0-2.429 0-3.21.08M12 10.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m8.5-3a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraOutlineIcon],svg[solar-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.598 4.487c.267-1.31 1.433-2.237 2.768-2.237h3.268c1.335 0 2.5.927 2.768 2.237a.656.656 0 0 0 .62.524h.033c1.403.062 2.481.234 3.381.825c.567.372 1.055.85 1.435 1.409c.473.694.681 1.492.781 2.456c.098.943.098 2.124.098 3.62v.085c0 1.496 0 2.678-.098 3.62c-.1.964-.308 1.762-.781 2.457a5.2 5.2 0 0 1-1.435 1.409c-.703.461-1.51.665-2.488.762c-.958.096-2.159.096-3.685.096H9.737c-1.526 0-2.727 0-3.685-.096c-.978-.097-1.785-.3-2.488-.762a5.2 5.2 0 0 1-1.435-1.41c-.473-.694-.681-1.492-.781-2.456c-.098-.942-.098-2.124-.098-3.62v-.085c0-1.496 0-2.677.098-3.62c.1-.964.308-1.762.781-2.456a5.2 5.2 0 0 1 1.435-1.41c.9-.59 1.978-.762 3.381-.823l.017-.001h.016a.656.656 0 0 0 .62-.524m2.768-.737c-.64 0-1.177.443-1.298 1.036c-.195.96-1.047 1.716-2.072 1.725c-1.348.06-2.07.225-2.61.579a3.7 3.7 0 0 0-1.017.999c-.276.405-.442.924-.53 1.767c-.088.856-.089 1.96-.089 3.508s0 2.651.09 3.507c.087.843.253 1.362.53 1.768c.268.394.613.734 1.017.999c.417.273.951.438 1.814.524c.874.087 2 .088 3.577.088h4.444c1.576 0 2.702 0 3.577-.088c.863-.086 1.397-.25 1.814-.524c.404-.265.75-.605 1.018-1c.276-.405.442-.924.53-1.767c.088-.856.089-1.96.089-3.507s0-2.652-.09-3.508c-.087-.843-.253-1.362-.53-1.767a3.7 3.7 0 0 0-1.017-1c-.538-.353-1.26-.518-2.61-.578c-1.024-.01-1.876-.764-2.071-1.725a1.314 1.314 0 0 0-1.298-1.036zm1.634 7a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m9-3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateBoldIcon],svg[solar-camera-rotate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06C2 17.96 2 16.428 2 13.364s0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21M15.27 9.6a.75.75 0 0 0-1.5 0v.143a3.92 3.92 0 0 0-4.54 6.267a3.918 3.918 0 0 0 6.662-2.326a.75.75 0 0 0-1.49-.17a2.418 2.418 0 1 1-1.72-2.595a.75.75 0 0 0 .473 1.415l1.52-.32a.75.75 0 0 0 .595-.734z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraRotateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateBoldDuotoneIcon],svg[solar-camera-rotate-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.52 8.85a.75.75 0 0 1 .75.75v1.68a.75.75 0 0 1-.596.734l-1.52.32a.75.75 0 0 1-.471-1.414a2.417 2.417 0 1 0 1.719 2.595a.75.75 0 0 1 1.49.17a3.918 3.918 0 1 1-2.123-3.941V9.6a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarCameraRotateBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateBrokenIcon],svg[solar-camera-rotate-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.52 10.68l-.28-.28a3.168 3.168 0 1 0 .907 2.6m-.627-2.32L13 11m1.52-.32V9"></svg:path><svg:path d="M2 13.364c0-3.065 0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06A3.4 3.4 0 0 1 2.277 18"></svg:path></svg:g>`,
})
export class SolarCameraRotateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateLineDuotoneIcon],svg[solar-camera-rotate-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14.52 10.68l-.28-.28a3.168 3.168 0 1 0 .907 2.6m-.627-2.32L13 11m1.52-.32V9"></svg:path></svg:g>`,
})
export class SolarCameraRotateLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateLinearIcon],svg[solar-camera-rotate-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14.52 10.68l-.28-.28a3.168 3.168 0 1 0 .907 2.6m-.627-2.32L13 11m1.52-.32V9"></svg:path></svg:g>`,
})
export class SolarCameraRotateLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateOutlineIcon],svg[solar-camera-rotate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.598 4.487c.267-1.31 1.433-2.237 2.768-2.237h3.268c1.335 0 2.5.927 2.768 2.237a.656.656 0 0 0 .653.525c1.403.06 2.481.233 3.381.824c.567.372 1.055.85 1.435 1.409c.473.694.681 1.492.781 2.456c.098.943.098 2.124.098 3.62v.085c0 1.496 0 2.678-.098 3.62c-.1.964-.308 1.762-.781 2.457a5.2 5.2 0 0 1-1.435 1.409c-.703.461-1.51.665-2.488.762c-.958.096-2.159.096-3.685.096H9.737c-1.526 0-2.727 0-3.685-.096c-.978-.097-1.785-.3-2.488-.762a5.2 5.2 0 0 1-1.435-1.41c-.473-.694-.681-1.492-.781-2.456c-.098-.942-.098-2.124-.098-3.62v-.085c0-1.496 0-2.677.098-3.62c.1-.964.308-1.762.781-2.456a5.2 5.2 0 0 1 1.435-1.41c.9-.59 1.978-.762 3.381-.823l.033-.001a.656.656 0 0 0 .62-.524m2.768-.737c-.64 0-1.177.443-1.298 1.036c-.195.96-1.047 1.716-2.072 1.725c-1.348.06-2.07.225-2.61.579a3.7 3.7 0 0 0-1.017.999c-.276.405-.442.924-.53 1.767c-.088.856-.089 1.96-.089 3.508s0 2.651.09 3.507c.087.843.253 1.362.53 1.768c.268.394.613.734 1.017.999c.417.273.951.438 1.814.524c.874.087 2 .088 3.577.088h4.444c1.576 0 2.702 0 3.577-.088c.863-.086 1.397-.25 1.814-.524c.404-.265.75-.605 1.018-1c.276-.405.442-.924.53-1.767c.088-.856.089-1.96.089-3.507s0-2.652-.09-3.508c-.087-.843-.253-1.362-.53-1.767a3.7 3.7 0 0 0-1.017-1c-.538-.353-1.26-.518-2.61-.578c-1.024-.01-1.876-.764-2.071-1.725a1.314 1.314 0 0 0-1.298-1.036zm4.154 4.5a.75.75 0 0 1 .75.75v1.68a.75.75 0 0 1-.596.734l-1.52.32a.75.75 0 0 1-.471-1.414a2.417 2.417 0 0 0-2.393 4.03a2.418 2.418 0 0 0 4.112-1.435a.75.75 0 0 1 1.49.17a3.918 3.918 0 1 1-2.123-3.941V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraRotateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareBoldIcon],svg[solar-camera-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7.25 12a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m1.5 0a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareBoldDuotoneIcon],svg[solar-camera-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareBrokenIcon],svg[solar-camera-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCameraSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareLineDuotoneIcon],svg[solar-camera-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle></svg:g>`,
})
export class SolarCameraSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareLinearIcon],svg[solar-camera-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle></svg:g>`,
})
export class SolarCameraSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareOutlineIcon],svg[solar-camera-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M7.25 12a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2BoldIcon],svg[solar-card-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12q0-.662.002-1.25h19.996Q22 11.338 22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20m2.045-7.75c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043zM5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m14.823 13.823l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03s.787.002.997.03a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03s-.787-.002-.997-.03a.7.7 0 0 1-.177-.042l-.003-.001l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997s.002-.787.03-.997a.7.7 0 0 1 .042-.177z"></svg:path>`,
})
export class SolarCard2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2BoldDuotoneIcon],svg[solar-card-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2c0 3.771 0 5.657 1.171 6.828S6.23 20 10 20" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.197 12.293c-.323-.043-.72-.043-1.152-.043h-.09c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47m-2.371 1.529l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997s.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4"></svg:path>`,
})
export class SolarCard2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2BrokenIcon],svg[solar-card-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 16.5H6m2-3H6"></svg:path><svg:path d="M14 15c0-.943 0-1.414.293-1.707S15.057 13 16 13s1.414 0 1.707.293S18 14.057 18 15s0 1.414-.293 1.707S16.943 17 16 17s-1.414 0-1.707-.293S14 15.943 14 15Z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCard2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2LineDuotoneIcon],svg[solar-card-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M10 16.5H6m2-3H6M2 10h20" opacity=".5"></svg:path><svg:path d="M14 15c0-.943 0-1.414.293-1.707S15.057 13 16 13s1.414 0 1.707.293S18 14.057 18 15s0 1.414-.293 1.707S16.943 17 16 17s-1.414 0-1.707-.293S14 15.943 14 15Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCard2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2LinearIcon],svg[solar-card-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M10 16.5H6m2-3H6M2 10h20"></svg:path><svg:path d="M14 15c0-.943 0-1.414.293-1.707S15.057 13 16 13s1.414 0 1.707.293S18 14.057 18 15s0 1.414-.293 1.707S16.943 17 16 17s-1.414 0-1.707-.293S14 15.943 14 15Z"></svg:path></svg:g>`,
})
export class SolarCard2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2OutlineIcon],svg[solar-card-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5q-.002.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289q0-.668-.002-1.25zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539m-5.269 3h.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997s.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042M5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCard2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardBoldIcon],svg[solar-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarCardBold0"><svg:g fill="none"><svg:path fill="#fff" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4m-4 16h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarCardBold0)"></svg:path>`,
})
export class SolarCardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardBoldDuotoneIcon],svg[solar-card-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2c0 3.771 0 5.657 1.171 6.828S6.23 20 10 20" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm-6.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarCardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardBrokenIcon],svg[solar-card-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M10 16H6m8 0h-1.5M2 10h5m15 0H11"></svg:path>`,
})
export class SolarCardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardLineDuotoneIcon],svg[solar-card-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M10 16H6m8 0h-1.5M2 10h20" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardLinearIcon],svg[solar-card-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M10 16H6m8 0h-1.5M2 10h20"></svg:path></svg:g>`,
})
export class SolarCardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardOutlineIcon],svg[solar-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.192 7.5q-.002.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289q0-.668-.002-1.25zm18.472-1.5H2.776c.02-.587.054-1.094.114-1.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.06.445.094.952.114 1.539M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveBoldIcon],svg[solar-card-recive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.47 20.53a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V14a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 20h4c.66 0 1.261 0 1.812-.006l-.403-.403a2.25 2.25 0 0 1 1.341-3.827V14a2.25 2.25 0 0 1 4.5 0v1.764c.224.025.445.083.654.175C22 14.917 22 13.636 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20m-4-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardReciveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveBoldDuotoneIcon],svg[solar-card-recive-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h4c.66 0 1.261 0 1.812-.006l-.403-.403a2.25 2.25 0 0 1 1.341-3.827V14a2.25 2.25 0 0 1 4.5 0v1.764c.224.025.445.083.654.175C22 14.917 22 13.636 22 12c0-.442 0-1.608-.002-2H2.002C2 10.392 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.47 20.53a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V14a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm-6.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4"></svg:path>`,
})
export class SolarCardReciveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveBrokenIcon],svg[solar-card-recive-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 14v6m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 16h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m0 12H6m7 0h-.5M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardReciveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveLineDuotoneIcon],svg[solar-card-recive-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 14v6m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4"></svg:path><svg:path d="M10 16H6m7 0h-.5M2 10h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarCardReciveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveLinearIcon],svg[solar-card-recive-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 14v6m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4m-4-4H6m7 0h-.5M2 10h20"></svg:path></svg:g>`,
})
export class SolarCardReciveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveOutlineIcon],svg[solar-card-recive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84V12a.75.75 0 0 1-1.5 0q0-.668-.002-1.25H2.752q-.003.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.168 6h18.448a16 16 0 0 0-.114-1.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.06.445-.094.952-.114 1.539m16.224 4a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14a.75.75 0 0 1 .75-.75M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardReciveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchBoldIcon],svg[solar-card-search-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.75 14.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14 16.75a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14 16.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4m0 16h3.627a5.25 5.25 0 1 1 8.369-6.34Q22 12.9 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20"></svg:path><svg:path fill="currentColor" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarCardSearchBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchBoldDuotoneIcon],svg[solar-card-search-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h3.627a5.25 5.25 0 1 1 8.369-6.34Q22 12.9 22 12c0-.442 0-1.608-.002-2H2.002C2 10.392 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.75 14.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14 16.75a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14 16.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4"></svg:path>`,
})
export class SolarCardSearchBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchBrokenIcon],svg[solar-card-search-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v1M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3m-3-4H6"></svg:path><svg:circle cx="18" cy="17" r="3"></svg:circle><svg:path stroke-linecap="round" d="m20.5 19.5l1 1M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardSearchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchLineDuotoneIcon],svg[solar-card-search-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3"></svg:path><svg:path stroke-linecap="round" d="M10 16H6m-4-6h20" opacity=".4"></svg:path><svg:circle cx="18" cy="17" r="3"></svg:circle><svg:path stroke-linecap="round" d="m20.5 19.5l1 1"></svg:path></svg:g>`,
})
export class SolarCardSearchLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchLinearIcon],svg[solar-card-search-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3m-3-4H6m-4-6h20"></svg:path><svg:circle cx="18" cy="17" r="3"></svg:circle><svg:path stroke-linecap="round" d="m20.5 19.5l1 1"></svg:path></svg:g>`,
})
export class SolarCardSearchLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchOutlineIcon],svg[solar-card-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84V13a.75.75 0 0 1-1.5 0v-1q0-.668-.002-1.25H2.752q-.003.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h3a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.168 6h18.448a16 16 0 0 0-.114-1.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.06.445-.094.952-.114 1.539M18 14.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 17a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14.25 17m-9-1a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendBoldIcon],svg[solar-card-send-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 20h4c1.056 0 1.964 0 2.75-.026v-1.738a2.25 2.25 0 0 1-1.341-3.827l2-2a2.25 2.25 0 0 1 3.182 0l1.403 1.403Q22 12.988 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20m-4.75-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m7.25-.75a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardSendBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendBoldDuotoneIcon],svg[solar-card-send-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2c0 .66 0 1.261-.006 1.812l-1.403-1.403a2.25 2.25 0 0 0-3.182 0l-2 2a2.25 2.25 0 0 0 1.341 3.827v1.738C15.964 20 15.056 20 14 20" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm-6.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4"></svg:path>`,
})
export class SolarCardSendBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendBrokenIcon],svg[solar-card-send-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 20v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 16h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m0 12H6m7 0h-.5M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardSendBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendLineDuotoneIcon],svg[solar-card-send-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 20v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4"></svg:path><svg:path d="M10 16H6m7 0h-.5M2 10h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarCardSendLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendLinearIcon],svg[solar-card-send-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 20v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4m-4-4H6m7 0h-.5M2 10h20"></svg:path></svg:g>`,
})
export class SolarCardSendLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendOutlineIcon],svg[solar-card-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84V12a.75.75 0 0 1-1.5 0q0-.668-.002-1.25H2.752q-.003.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.168 6h18.448a16 16 0 0 0-.114-1.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.06.445-.094.952-.114 1.539m15.694 4.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06zM5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferBoldIcon],svg[solar-card-transfer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m22 12.818l-.409-.409a2.25 2.25 0 0 0-3.182 0l-.801.801a2.251 2.251 0 0 0-4.358.79v1.764a2.25 2.25 0 0 0-1.341 3.827l.409.409H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12q0-.662.002-1.25h19.996Q22 11.338 22 12zM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.5 13.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14a.75.75 0 0 1 .75-.75m3.97.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardTransferBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferBoldDuotoneIcon],svg[solar-card-transfer-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 12.818l-.409-.409a2.25 2.25 0 0 0-3.182 0l-.801.801a2.251 2.251 0 0 0-4.358.79v1.764a2.25 2.25 0 0 0-1.341 3.827l.409.409H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4m9.475 9.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.5 13.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardTransferBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferBrokenIcon],svg[solar-card-transfer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5M14 4c3.771 0 5.657 0 6.828 1.172C21.892 6.235 21.99 7.886 22 11"></svg:path><svg:path stroke-linejoin="round" d="M15.5 14v6m0 0l2-2m-2 2l-2-2m6.5 2v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M10 16H6m-4-6h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardTransferBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferLineDuotoneIcon],svg[solar-card-transfer-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 11c-.01-3.114-.108-4.765-1.172-5.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5"></svg:path><svg:path stroke-linejoin="round" d="M20 20v-6m0 0l2 2m-2-2l-2 2" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M15.5 14v6m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M10 16H6" opacity=".5"></svg:path><svg:path d="M2 10h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarCardTransferLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferLinearIcon],svg[solar-card-transfer-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 11c-.01-3.114-.108-4.765-1.172-5.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5"></svg:path><svg:path stroke-linejoin="round" d="M15.5 14v6m0 0l2-2m-2 2l-2-2m6.5 2v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M10 16H6m-4-6h20"></svg:path></svg:g>`,
})
export class SolarCardTransferLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferOutlineIcon],svg[solar-card-transfer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.678.678 1.015 1.522 1.19 2.55c.127.75.173 1.639.19 2.683a.8.8 0 0 1 .004.23q.004.429.006.894a.75.75 0 0 1-1.5.004v-.252H2.751q-.003.582-.002 1.25c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1.5a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m-7.168 6h18.448c-.024-.715-.07-1.306-.154-1.808c-.143-.842-.387-1.355-.772-1.74c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.06.445-.094.952-.114 1.539m12.724 4a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14a.75.75 0 0 1 .75-.75m3.97.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06zM5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardTransferOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderBoldIcon],svg[solar-cardholder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m6 3.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm-.414-8.664C8.172 6 9.114 6 11 6h2c1.886 0 2.828 0 3.414.586S17 8.114 17 10v.25h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h2V10c0-1.886 0-2.828.586-3.414" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardholderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderBoldDuotoneIcon],svg[solar-cardholder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 10.25H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 6h-2c-1.886 0-2.828 0-3.414.586S7 8.114 7 10v.25h10V10c0-1.886 0-2.828-.586-3.414S14.886 6 13 6" opacity=".7"></svg:path>`,
})
export class SolarCardholderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderBrokenIcon],svg[solar-cardholder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path d="M17 11v-1c0-1.886 0-2.829-.586-3.415c-.471-.471-1.174-.563-2.414-.581M7 11v-1c0-1.886 0-2.829.586-3.415c.471-.471 1.174-.563 2.414-.581M5 11h14M8 16h1m7 0h-4"></svg:path></svg:g>`,
})
export class SolarCardholderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderLineDuotoneIcon],svg[solar-cardholder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path d="M17 11v-1c0-1.886 0-2.828-.586-3.414S14.886 6 13 6h-2c-1.886 0-2.828 0-3.414.586S7 8.114 7 10v1"></svg:path><svg:path stroke-linecap="round" d="M5 11h14"></svg:path><svg:path stroke-linecap="round" d="M8 16h8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCardholderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderLinearIcon],svg[solar-cardholder-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path d="M17 11v-1c0-1.886 0-2.828-.586-3.414S14.886 6 13 6h-2c-1.886 0-2.828 0-3.414.586S7 8.114 7 10v1"></svg:path><svg:path stroke-linecap="round" d="M5 11h14M8 16h8"></svg:path></svg:g>`,
})
export class SolarCardholderLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderOutlineIcon],svg[solar-cardholder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m4.335 2.324h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.302H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.25v-.302c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08m-3.198 5h8.5V10c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C7.753 8.388 7.75 9.036 7.75 10zM7.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardholderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2BoldIcon],svg[solar-cart-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.037.136l.002.007l.874 3.324l.012-.017q.063.068.121.143c.901 1.154.472 2.87-.386 6.301q-.116.469-.22.873l-2.477-2.973l1.83-2.685l-.505-1.922l-2.324 3.409L12.976 9h1.34c1.893 0 3.28 0 4.298.177l-.549-2.088c-.29-1.064-.393-1.395-.57-1.632a1.75 1.75 0 0 0-.767-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.279.568-.57 1.632l-.548 2.088C6.404 9 7.791 9 9.685 9h1.339L7.56 13.157L5.236 9.748L4.73 11.67l1.83 2.685l-2.477 2.973q-.104-.404-.22-.873c-.858-3.431-1.287-5.147-.386-6.301q.059-.075.121-.143l.012.017l.874-3.324l.002-.007l.037-.136c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222"></svg:path><svg:path fill="currentColor" d="M4.602 19.05c.233.593.5 1.007.894 1.315C6.31 21 7.435 21 9.685 21h1.407L7.44 15.644zM12.908 21h1.407c2.25 0 3.375 0 4.189-.635c.394-.308.661-.722.894-1.316l-2.838-3.405zM12 19.669l-3.561-5.224L12 10.172l3.561 4.273z"></svg:path>`,
})
export class SolarCart2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2BoldDuotoneIcon],svg[solar-cart-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.023 2a1.75 1.75 0 0 0 0 3.5h4a1.75 1.75 0 1 0 0-3.5zM3.887 16.205C3.029 12.773 2.6 11.058 3.5 9.904S6.17 8.75 9.708 8.75h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m4.647 9.118l2.857 4.106l3.728-4.474h1.536l3.728 4.474l2.865-4.12c.507.172.891.425 1.184.8l.045.06l-3.098 4.455l2.392 2.87c-.183.7-.347 1.252-.54 1.696l-2.74-3.29l-3.517 5.055h-2.175l-3.516-5.054l-2.71 3.252c-.19-.446-.353-1.001-.535-1.7l2.357-2.83l-3.076-4.421q.033-.048.068-.093c.286-.366.659-.616 1.147-.786M12 19.687L8.392 14.5L12 10.17l3.607 4.33z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.604 4.502a1.74 1.74 0 0 0 .002-1.501c.683.005 1.216.036 1.691.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.777 1.999l.046.17l.513 2.963c-.409-.282-.936-.45-1.618-.55l-.36-2.087c-.285-1.04-.388-1.367-.562-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.485-.11-1.147-.118M8.441 3.001a1.74 1.74 0 0 0 .002 1.501c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.561 1.6l-.361 2.089c-.682.1-1.209.267-1.618.548l.513-2.962l.046-.17c.237-.872.41-1.505.777-2A3.25 3.25 0 0 1 6.75 3.224c.475-.186 1.008-.217 1.691-.222"></svg:path>`,
})
export class SolarCart2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2BrokenIcon],svg[solar-cart-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11"></svg:path><svg:path stroke-linecap="round" d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846"></svg:path></svg:g>`,
})
export class SolarCart2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2LineDuotoneIcon],svg[solar-cart-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" opacity=".5"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCart2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2LinearIcon],svg[solar-cart-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11"></svg:path></svg:g>`,
})
export class SolarCart2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2OutlineIcon],svg[solar-cart-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.638 21.75c-1.085 0-1.967 0-2.675-.085c-.74-.088-1.374-.276-1.929-.71c-.554-.432-.89-1.002-1.156-1.698c-.254-.667-.467-1.522-.73-2.575l-.027-.105c-.416-1.665-.749-2.995-.856-4.05c-.11-1.09 0-2.038.621-2.835c.283-.362.622-.63 1.01-.828l.628-2.303c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222A1.75 1.75 0 0 1 10 2.25h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.493.539 1.127.776 1.998l.628 2.303c.387.199.727.466 1.01.828c.621.797.731 1.746.62 2.834c-.107 1.056-.44 2.386-.855 4.05l-.027.106c-.263 1.053-.477 1.908-.73 2.575c-.266.696-.602 1.266-1.157 1.699c-.554.433-1.189.62-1.928.71c-.709.084-1.59.084-2.675.084zM7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10.4 9.75h-.714c-1.793 0-3.055.002-3.985.136a6 6 0 0 0-.331.057l2.19 3.214zm-6.36.905c-.258.354-.371.837-.282 1.72c.095.935.4 2.16.834 3.898l.086.343l1.884-2.261zm1.12 7.725q.06.183.121.343c.211.555.418.848.678 1.05c.259.203.593.332 1.183.403c.61.073 1.4.074 2.544.074h.896L7.44 15.643zm8.26 1.87l3.153-4.625l2.268 2.754q-.06.183-.12.344c-.212.555-.419.848-.678 1.05s-.594.332-1.183.403c-.61.073-1.4.074-2.544.074zm5.906-3.642l.083-.335c.435-1.739.74-2.963.834-3.899c.09-.882-.023-1.365-.281-1.719l-2.508 3.68zm-.694-6.665a6 6 0 0 0-.331-.057c-.93-.134-2.192-.136-3.985-.136h-.638l2.782 3.378zM10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm2.04 6.372l3.54 4.297l-3.58 5.25l-3.562-5.224z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3BoldIcon],svg[solar-cart-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2.25a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.047.17l-.513 2.964q-.277.191-.486.459c-.901 1.153-.472 2.87.386 6.301c.545 2.183.818 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.189-.635c.814-.636 1.086-1.727 1.632-3.91c.858-3.432 1.287-5.147.386-6.301a2.2 2.2 0 0 0-.487-.46l-.513-2.962l-.046-.17c-.237-.872-.41-1.506-.776-2a3.25 3.25 0 0 0-1.426-1.089c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25zm8.418 6.896l-.362-2.088c-.283-1.04-.386-1.367-.56-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.663.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.56-.56 1.6l-.362 2.089C6.58 9 7.91 9 9.685 9h4.63c1.775 0 3.105 0 4.103.146M8 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m8.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM12 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3BoldDuotoneIcon],svg[solar-cart-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a1.75 1.75 0 1 0 0 3.5h4A1.75 1.75 0 1 0 14 2zM3.863 16.205c-.858-3.432-1.287-5.147-.386-6.301S6.147 8.75 9.684 8.75h4.63c3.538 0 5.307 0 6.208 1.154s.472 2.87-.386 6.301c-.546 2.183-.819 3.274-1.633 3.91c-.813.635-1.938.635-4.188.635h-4.63c-2.25 0-3.376 0-4.19-.635c-.813-.636-1.086-1.727-1.632-3.91" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.58 4.502a1.74 1.74 0 0 0 .002-1.501c.683.005 1.216.036 1.692.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.047.17l.512 2.964c-.408-.282-.935-.45-1.617-.55l-.361-2.087c-.284-1.04-.387-1.367-.561-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118M8.418 3a1.74 1.74 0 0 0 .002 1.502c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.56 1.6l-.362 2.089c-.681.1-1.208.267-1.617.548l.512-2.962l.047-.17c.237-.872.41-1.506.776-2a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222m.332 9.749a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM16 12a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 16 12m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarCart3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3BrokenIcon],svg[solar-cart-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v4m8-4v4m-4-4v4"></svg:path><svg:path stroke-linecap="round" d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846"></svg:path></svg:g>`,
})
export class SolarCart3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3LineDuotoneIcon],svg[solar-cart-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" opacity=".5"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v4m8-4v4m-4-4v4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCart3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3LinearIcon],svg[solar-cart-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v4m8-4v4m-4-4v4"></svg:path></svg:g>`,
})
export class SolarCart3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3OutlineIcon],svg[solar-cart-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4BoldIcon],svg[solar-cart-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.436.539.576 1.209.525 2.136H2.853c-.051-.927.09-1.597.525-2.136c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.555 14.257a74 74 0 0 1-.51-2.507h17.91a74 74 0 0 1-.51 2.507l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076zM10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4BoldDuotoneIcon],svg[solar-cart-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.045 11.75c.126.714.303 1.541.51 2.507l.428 2c.487 2.273.731 3.409 1.556 4.076S7.526 21 9.85 21h4.3c2.324 0 3.486 0 4.31-.667c.826-.667 1.07-1.803 1.556-4.076l.429-2c.207-.966.384-1.793.51-2.507z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.33 2.665a.75.75 0 0 1 1.341.67l-1.835 3.67Q8.56 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 1.342-.67l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.436.539.576 1.209.525 2.136H21q.075 0 .146.014a13 13 0 0 1-.19 1.486H3.045a13 13 0 0 1-.192-1.486A1 1 0 0 1 3 10.25h-.147c-.051-.927.09-1.597.525-2.136c.548-.678 1.397-.943 2.75-1.047z"></svg:path>`,
})
export class SolarCart4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4BrokenIcon],svg[solar-cart-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M3 11h4m14 0H11m-1 3h4m4-5l-3-6M6 9l3-6"></svg:path><svg:path d="M20.016 16.257c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114c.67.83.643 1.972.288 3.886"></svg:path></svg:g>`,
})
export class SolarCart4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4LineDuotoneIcon],svg[solar-cart-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 11h18m-11 3h4m4-5l-3-6M6 9l3-6" opacity=".6"></svg:path></svg:g>`,
})
export class SolarCart4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4LinearIcon],svg[solar-cart-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076c-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 11h18m-11 3h4m4-5l-3-6M6 9l3-6"></svg:path></svg:g>`,
})
export class SolarCart4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4OutlineIcon],svg[solar-cart-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l1.813 3.626q.641.031 1.17.106c1.056.151 1.93.477 2.551 1.245s.757 1.691.684 2.755c-.07 1.031-.35 2.332-.698 3.957l-.451 2.107c-.235 1.097-.426 1.986-.666 2.68c-.25.725-.58 1.32-1.142 1.775s-1.214.652-1.974.745c-.73.089-1.64.089-2.76.089H9.802c-1.122 0-2.031 0-2.761-.089c-.76-.093-1.412-.29-1.974-.745s-.892-1.05-1.142-1.774c-.24-.695-.43-1.584-.666-2.68l-.451-2.107c-.348-1.626-.627-2.927-.698-3.958c-.073-1.064.063-1.986.684-2.755c.62-.768 1.494-1.094 2.55-1.245q.53-.074 1.17-.106L8.33 2.665a.75.75 0 0 1 1.342.67l-1.46 2.917q.546-.003 1.149-.002h5.278q.603 0 1.149.002l-1.459-2.917a.75.75 0 0 1 .335-1.006M5.732 7.858l-.403.806a.75.75 0 1 0 1.342.67l.787-1.574c.57-.01 1.22-.011 1.964-.011h5.156c.744 0 1.394 0 1.964.01l.787 1.575a.75.75 0 0 0 1.342-.67l-.403-.806l.174.023c.884.127 1.317.358 1.597.703c.275.34.41.803.356 1.665H3.605c-.054-.862.081-1.325.356-1.665c.28-.345.713-.576 1.597-.703zM4.288 14.1a81 81 0 0 1-.481-2.35h16.386a83 83 0 0 1-.482 2.35l-.428 2c-.248 1.155-.42 1.954-.627 2.552c-.2.58-.404.886-.667 1.098c-.262.212-.605.348-1.212.422c-.629.077-1.447.078-2.628.078H9.85c-1.18 0-1.998-.001-2.627-.078c-.608-.074-.95-.21-1.212-.422c-.263-.212-.468-.519-.667-1.098c-.207-.598-.38-1.397-.627-2.552z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5BoldIcon],svg[solar-cart-5-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart5BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5BoldDuotoneIcon],svg[solar-cart-5-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l3 6a.75.75 0 1 1-1.342.67l-3-6a.75.75 0 0 1 .336-1.006m-5.33.001a.75.75 0 0 0-1.006.335l-3 6a.75.75 0 1 0 1.342.67l3-6a.75.75 0 0 0-.336-1.006" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart5BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5BrokenIcon],svg[solar-cart-5-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.016 16.257c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114c.67.83.643 1.972.288 3.886"></svg:path><svg:path stroke-linejoin="round" d="M16 12h-4m-3 0H8m2 3h4m4-6l-3-6M6 9l3-6"></svg:path></svg:g>`,
})
export class SolarCart5BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5LineDuotoneIcon],svg[solar-cart-5-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8m-6 3h4" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18 9l-3-6M6 9l3-6" opacity=".6"></svg:path></svg:g>`,
})
export class SolarCart5LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5LinearIcon],svg[solar-cart-5-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8m-6 3h4m4-6l-3-6M6 9l3-6"></svg:path></svg:g>`,
})
export class SolarCart5LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5OutlineIcon],svg[solar-cart-5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l1.813 3.626q.641.031 1.17.106c1.056.151 1.93.477 2.551 1.245s.757 1.691.684 2.755c-.07 1.031-.35 2.332-.698 3.957l-.451 2.107c-.235 1.097-.426 1.986-.666 2.68c-.25.725-.58 1.32-1.142 1.775s-1.214.652-1.974.745c-.73.089-1.64.089-2.76.089H9.802c-1.122 0-2.031 0-2.761-.089c-.76-.093-1.412-.29-1.974-.745s-.892-1.05-1.142-1.774c-.24-.695-.43-1.584-.666-2.68l-.451-2.107c-.348-1.626-.627-2.927-.698-3.958c-.073-1.064.063-1.986.684-2.755c.62-.768 1.494-1.094 2.55-1.245q.53-.074 1.17-.106L8.33 2.665a.75.75 0 0 1 1.342.67l-1.46 2.917q.546-.003 1.149-.002h5.278q.603 0 1.149.002l-1.459-2.917a.75.75 0 0 1 .335-1.006M5.732 7.858l-.403.806a.75.75 0 1 0 1.342.67l.787-1.574c.57-.01 1.22-.011 1.964-.011h5.156c.744 0 1.394 0 1.964.01l.787 1.575a.75.75 0 0 0 1.342-.67l-.403-.806l.174.023c.884.127 1.317.358 1.597.703c.28.346.414.819.353 1.71c-.062.91-.316 2.106-.68 3.805l-.43 2c-.247 1.155-.42 1.954-.626 2.552c-.2.58-.404.886-.667 1.098c-.262.212-.605.348-1.212.422c-.629.077-1.447.078-2.628.078H9.85c-1.18 0-1.998-.001-2.627-.078c-.608-.074-.95-.21-1.212-.422c-.263-.212-.468-.519-.667-1.098c-.207-.598-.38-1.397-.627-2.552l-.429-2c-.364-1.7-.618-2.894-.68-3.805c-.061-.891.074-1.364.353-1.71c.28-.345.713-.576 1.597-.703z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart5OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartBoldIcon],svg[solar-cart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.742 2.722l.28.841l.024.03c.901 1.154.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91c-.858-3.431-1.287-5.147-.386-6.301l.024-.03l.28-.841l.742-2.722c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222m.002 1.502c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635l-.57 2.089C6.384 9 7.778 9 9.684 9h4.631c1.907 0 3.3 0 4.32.18l-.569-2.089c-.29-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartBoldDuotoneIcon],svg[solar-cart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.023 2a1.75 1.75 0 0 0 0 3.5h4a1.75 1.75 0 1 0 0-3.5zM3.887 16.205C3.029 12.773 2.6 11.058 3.5 9.904S6.17 8.75 9.708 8.75h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.604 4.502a1.74 1.74 0 0 0 .002-1.501c.683.005 1.216.036 1.691.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.777 1.999l.046.17l.513 2.963c-.409-.282-.936-.45-1.618-.55l-.36-2.087c-.285-1.04-.388-1.367-.562-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.485-.11-1.147-.118M8.441 3.001a1.74 1.74 0 0 0 .002 1.501c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.561 1.6l-.361 2.089c-.682.1-1.209.267-1.618.548l.513-2.962l.046-.17c.237-.872.41-1.505.777-2A3.25 3.25 0 0 1 6.75 3.224c.475-.186 1.008-.217 1.691-.222"></svg:path>`,
})
export class SolarCartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartBrokenIcon],svg[solar-cart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path></svg:g>`,
})
export class SolarCartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckBoldIcon],svg[solar-cart-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zm12.477 6.165c.3.286.312.76.026 1.06l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63l2.314-2.43a.75.75 0 0 1 1.06-.026" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckBoldDuotoneIcon],svg[solar-cart-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.084 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362q.035.333.044.738H17.13c1.685 0 3.202 0 3.646.577s.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.472 2.293-1.024 2.742c-.552.45-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.914s-.93-1.884-.93-4.826V7.038c0-.74 0-1.235-.042-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-.958-8.483a.75.75 0 1 0-1.086-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0z"></svg:path>`,
})
export class SolarCartCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckBrokenIcon],svg[solar-cart-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11 10.8l1.143 1.2L15 9"></svg:path><svg:path stroke-linecap="round" d="m2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckLineDuotoneIcon],svg[solar-cart-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 10.8l1.143 1.2L15 9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCartCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckLinearIcon],svg[solar-cart-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 10.8l1.143 1.2L15 9"></svg:path></svg:g>`,
})
export class SolarCartCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckOutlineIcon],svg[solar-cart-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.543 9.517a.75.75 0 1 0-1.086-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.293 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362l.011.108H17.12c.819 0 1.653 0 2.34.077c.35.039.697.101 1.003.209c.3.105.631.278.866.584c.382.496.449 1.074.413 1.66c-.035.558-.173 1.252-.338 2.077l-.01.053l-.002.004l-.508 2.47c-.15.726-.276 1.337-.439 1.82c-.172.51-.41.96-.837 1.308c-.427.347-.916.49-1.451.556c-.505.062-1.13.062-1.87.062H10.88c-1.345 0-2.435 0-3.293-.122c-.897-.127-1.65-.4-2.243-1.026c-.547-.576-.839-1.188-.985-2.042c-.137-.8-.15-1.848-.15-3.3V7.038c0-.74-.002-1.235-.043-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957M5.708 6.87v2.89c0 1.489.018 2.398.13 3.047c.101.595.274.925.594 1.263c.273.288.65.472 1.365.573c.74.105 1.724.107 3.14.107h5.304c.799 0 1.33-.001 1.734-.05c.382-.047.56-.129.685-.231s.24-.26.364-.625c.13-.385.238-.905.4-1.688l.498-2.42v-.002c.178-.89.295-1.482.322-1.926c.026-.422-.04-.569-.101-.65a.6.6 0 0 0-.177-.087a3.2 3.2 0 0 0-.672-.134c-.595-.066-1.349-.067-2.205-.067zM5.25 19.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m6.75-.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossBoldIcon],svg[solar-cart-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zm7.93 6.678a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossBoldDuotoneIcon],svg[solar-cart-cross-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.084 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362q.035.333.044.738H17.13c1.685 0 3.202 0 3.646.577s.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.472 2.293-1.024 2.742c-.552.45-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.914s-.93-1.884-.93-4.826V7.038c0-.74 0-1.235-.042-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.03 8.97a.75.75 0 1 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zM7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartCrossBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossBrokenIcon],svg[solar-cart-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m11.5 12.5l3-3m0 3l-3-3M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossLineDuotoneIcon],svg[solar-cart-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11.5 12.5l3-3m0 3l-3-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCartCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossLinearIcon],svg[solar-cart-cross-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11.5 12.5l3-3m0 3l-3-3"></svg:path></svg:g>`,
})
export class SolarCartCrossLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossOutlineIcon],svg[solar-cart-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 8.97a.75.75 0 1 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.293 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362l.011.108H17.12c.819 0 1.653 0 2.34.077c.35.039.697.101 1.003.209c.3.105.631.278.866.584c.382.496.449 1.074.413 1.66c-.035.558-.173 1.252-.338 2.077l-.01.053l-.002.004l-.508 2.47c-.15.726-.276 1.337-.439 1.82c-.172.51-.41.96-.837 1.308c-.427.347-.916.49-1.451.556c-.505.062-1.13.062-1.87.062H10.88c-1.345 0-2.435 0-3.293-.122c-.897-.127-1.65-.4-2.243-1.026c-.547-.576-.839-1.188-.985-2.042c-.137-.8-.15-1.848-.15-3.3V7.038c0-.74-.002-1.235-.043-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957M5.708 6.87v2.89c0 1.489.018 2.398.13 3.047c.101.595.274.925.594 1.263c.273.288.65.472 1.365.573c.74.105 1.724.107 3.14.107h5.304c.799 0 1.33-.001 1.734-.05c.382-.047.56-.129.685-.231s.24-.26.364-.625c.13-.385.238-.905.4-1.688l.498-2.42v-.002c.178-.89.295-1.482.322-1.926c.026-.421-.04-.569-.101-.65a.6.6 0 0 0-.177-.087a3.2 3.2 0 0 0-.672-.134c-.595-.066-1.349-.067-2.205-.067zM5.25 19.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m6.75-.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2BoldIcon],svg[solar-cart-large-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.237 2.288a.75.75 0 1 0-.474 1.423l.265.089c.676.225 1.124.376 1.453.529c.312.145.447.262.533.382s.155.284.194.626c.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.982 2.26c.601.602 1.36.86 2.26.981c.866.117 1.969.117 3.336.117H18a.75.75 0 0 0 0-1.5h-7c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248s.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508S18.506 6 16.45 6H5.745a9 9 0 0 0-.047-.833c-.055-.485-.176-.93-.467-1.333c-.291-.404-.675-.66-1.117-.865c-.417-.194-.946-.37-1.572-.58zM7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartLarge2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2BoldDuotoneIcon],svg[solar-cart-large-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.289 2.763a.75.75 0 0 1 .948-.475l.265.089l.04.013c.626.209 1.155.385 1.572.579c.442.206.826.46 1.117.865c.291.403.412.848.467 1.333c.052.456.052 1.014.052 1.674V9.5c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h7a.75.75 0 1 1 0 1.5h-7.055c-1.367 0-2.47 0-3.337-.117c-.9-.12-1.658-.38-2.26-.981c-.601-.602-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713 0-1.185-.042-1.546c-.04-.342-.107-.507-.194-.626c-.086-.12-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.53l-.265-.088a.75.75 0 0 1-.474-.948" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.745 6q.006.39.005.841V9.5c0 1.435.002 2.437.103 3.192q.023.165.05.308h10.12c.959 0 1.438 0 1.814-.248s.565-.688.942-1.57l.43-1c.809-1.89 1.213-2.833.769-3.508S18.506 6 16.45 6z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M18 19.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class SolarCartLarge2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2BrokenIcon],svg[solar-cart-large-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h2m6 0h-2"></svg:path><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M5 6h3m-2.5 7h10.522c.96 0 1.439 0 1.815-.248s.564-.688.942-1.57l.429-1c.81-1.89 1.214-2.833.77-3.508C19.533 6 18.505 6 16.45 6H12"></svg:path></svg:g>`,
})
export class SolarCartLarge2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2LineDuotoneIcon],svg[solar-cart-large-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"></svg:path><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path d="M5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"></svg:path></svg:g>`,
})
export class SolarCartLarge2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2LinearIcon],svg[solar-cart-large-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"></svg:path><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3ZM5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"></svg:path></svg:g>`,
})
export class SolarCartLarge2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2OutlineIcon],svg[solar-cart-large-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.237 2.288a.75.75 0 1 0-.474 1.424l.265.088c.676.225 1.124.376 1.453.529c.312.145.447.262.533.382s.155.284.194.626c.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.982 2.26c.601.602 1.36.86 2.26.982c.866.116 1.969.116 3.336.116H19a.75.75 0 0 0 0-1.5h-8c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556a1.5 1.5 0 0 1-.255-.341h9.905c.448 0 .842 0 1.17-.035c.354-.039.698-.124 1.02-.337c.324-.213.537-.495.712-.806c.161-.286.317-.649.493-1.061l.467-1.09c.385-.896.706-1.647.867-2.257c.168-.637.212-1.302-.184-1.903c-.396-.6-1.025-.822-1.676-.919c-.625-.092-1.441-.092-2.417-.092H5.707l-.009-.083c-.055-.485-.176-.93-.467-1.333c-.291-.404-.675-.66-1.117-.865c-.417-.194-.946-.37-1.572-.58zM5.75 6.75V9.5c0 1.172.001 2.054.057 2.75h10.215c.496 0 .809-.001 1.046-.027c.219-.023.303-.062.356-.097s.122-.097.23-.289c.117-.208.24-.495.436-.95l.429-1c.414-.968.69-1.616.819-2.106c.126-.476.062-.62.014-.694c-.049-.073-.157-.189-.644-.26c-.501-.075-1.205-.077-2.257-.077zm-.5 12.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m9 1.5a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartLarge2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3BoldIcon],svg[solar-cart-large-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2.084 2.751a.75.75 0 0 1 .956-.459l.302.106c.616.217 1.14.401 1.552.603c.44.217.819.483 1.103.899c.282.412.398.865.452 1.362q.035.333.043.738H8.15l1.655 9.377c-2.025-.018-3.14-.135-3.876-.91C5.063 13.551 5 12.581 5 9.64V7.038c0-.74 0-1.235-.041-1.615c-.04-.363-.11-.545-.2-.677c-.088-.129-.221-.25-.525-.398c-.322-.158-.761-.314-1.429-.549l-.261-.091a.75.75 0 0 1-.459-.957m9.244 12.629h2.842L15.827 6H9.673zM17.35 6c1.596.001 3.002.025 3.426.577c.444.577.27 1.447-.076 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.025 2.742c-.551.45-1.332.45-2.893.45h-.588z"></svg:path>`,
})
export class SolarCartLarge3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3BoldDuotoneIcon],svg[solar-cart-large-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path><svg:path fill="currentColor" d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.64c0 2.942.064 3.912.93 4.826c.735.776 1.85.893 3.875.91l1.524.004h4.954c1.56 0 2.341 0 2.893-.45s.71-1.214 1.024-2.742l.5-2.425c.347-1.74.52-2.609.077-3.186c-.425-.552-1.83-.576-3.427-.577H6.492a9 9 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603z" opacity=".6"></svg:path><svg:path fill="currentColor" d="m8.15 6l1.654 9.377l1.524.003L9.673 6zm7.676 0l-1.655 9.38h1.524L17.35 6z"></svg:path>`,
})
export class SolarCartLarge3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3BrokenIcon],svg[solar-cart-large-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m16.5 6.5l-1.5 9m-6-9l1.5 8.5M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12M4.958 6.12H9m4 0h4.089c1.685 0 3.202 0 3.646.577s.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.024 2.742c-.552.45-1.333.45-2.894.45H15"></svg:path></svg:g>`,
})
export class SolarCartLarge3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3LineDuotoneIcon],svg[solar-cart-large-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 6.5L15 15M9 6.5l1.5 8.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCartLarge3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3LinearIcon],svg[solar-cart-large-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 6.5L15 15M9 6.5l1.5 8.5"></svg:path></svg:g>`,
})
export class SolarCartLarge3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3OutlineIcon],svg[solar-cart-large-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.249 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.76c0 1.453.014 2.5.151 3.3c.146.854.438 1.466.985 2.042c.594.627 1.346.9 2.243 1.026c.858.122 1.948.122 3.293.122h5.406c.742 0 1.366 0 1.87-.062c.537-.065 1.025-.209 1.452-.556c.426-.348.665-.797.837-1.309c.163-.482.289-1.093.439-1.82l.508-2.469l.002-.005l.01-.052c.165-.825.303-1.519.338-2.077c.036-.586-.031-1.164-.413-1.66c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.002-.21c-.687-.076-1.522-.076-2.34-.076H5.667l-.01-.108c-.054-.497-.17-.95-.453-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603zm3.46 4.578h2.595l1.39 7.876c-.783-.008-1.395-.032-1.897-.103c-.715-.101-1.092-.285-1.365-.573c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm5.509 7.88h3.065l1.39-7.88H9.827zm4.588 0l1.39-7.88c.813 0 1.528.004 2.098.067c.296.034.517.08.672.134a.6.6 0 0 1 .176.086c.062.082.128.23.102.651c-.027.444-.143 1.036-.321 1.926v.002l-.5 2.42c-.16.783-.27 1.303-.399 1.688c-.123.366-.239.523-.364.625s-.303.184-.685.23c-.404.05-.935.051-1.734.051zm-8.306 7a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m9.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartLarge3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4BoldIcon],svg[solar-cart-large-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zm7.2 6.583a.75.75 0 0 0-1.48.25l.529 3.118a.75.75 0 0 0 1.479-.25zm5.414-.614a.75.75 0 0 0-.865.614l-.528 3.118a.75.75 0 1 0 1.479.25l.528-3.118a.75.75 0 0 0-.614-.864M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartLarge4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4BoldDuotoneIcon],svg[solar-cart-large-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.64c0 2.942.064 3.912.93 4.826s2.26.914 5.05.914h5.303c1.56 0 2.341 0 2.893-.45s.71-1.214 1.024-2.742l.5-2.425c.347-1.74.52-2.609.077-3.186C20.332 6 18.815 6 17.13 6H6.492a9 9 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M9.374 8.26a.75.75 0 0 1 .865.615l.528 3.118a.75.75 0 1 1-1.48.25L8.76 9.125a.75.75 0 0 1 .614-.864m5.414.614a.75.75 0 1 1 1.479.25l-.528 3.118a.75.75 0 1 1-1.48-.25z"></svg:path>`,
})
export class SolarCartLarge4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4BrokenIcon],svg[solar-cart-large-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m9.5 9l.528 3.118M15.528 9L15 12.118M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartLarge4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4LineDuotoneIcon],svg[solar-cart-large-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9.5 9l.528 3.118M15.528 9L15 12.118" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCartLarge4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4LinearIcon],svg[solar-cart-large-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9.5 9l.528 3.118M15.528 9L15 12.118"></svg:path></svg:g>`,
})
export class SolarCartLarge4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4OutlineIcon],svg[solar-cart-large-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.375 8.26a.75.75 0 0 1 .865.615l.528 3.118a.75.75 0 0 1-1.48.25l-.527-3.118a.75.75 0 0 1 .614-.864m5.415.614a.75.75 0 1 1 1.478.25l-.528 3.118a.75.75 0 1 1-1.48-.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.249 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.76c0 1.453.014 2.5.151 3.3c.146.854.438 1.466.985 2.042c.594.627 1.346.9 2.243 1.026c.858.122 1.948.122 3.293.122h5.406c.742 0 1.366 0 1.87-.062c.537-.065 1.025-.209 1.452-.556c.426-.348.665-.797.837-1.309c.163-.482.289-1.093.439-1.82l.508-2.469l.002-.005l.01-.052c.165-.825.303-1.519.338-2.077c.036-.586-.031-1.164-.413-1.66c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.002-.21c-.687-.076-1.522-.076-2.34-.076H5.667l-.01-.108c-.054-.497-.17-.95-.453-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603zm3.46 4.578h11.38c.856 0 1.61.001 2.205.067c.296.034.517.08.672.134a.6.6 0 0 1 .176.086c.062.082.128.23.102.651c-.027.444-.143 1.036-.321 1.926v.002l-.5 2.42c-.16.783-.27 1.303-.399 1.688c-.123.366-.239.523-.364.625s-.303.184-.685.23c-.404.05-.935.051-1.734.051h-5.303c-1.417 0-2.4-.002-3.14-.107c-.716-.101-1.093-.285-1.366-.573c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zM7.5 21.75a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m9.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartLarge4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeBoldIcon],svg[solar-cart-large-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.289 2.763a.75.75 0 0 1 .948-.475l.305.102c.626.209 1.155.385 1.572.579c.442.206.826.46 1.117.865c.291.403.412.848.467 1.333q.04.372.047.833h10.706c2.055 0 3.082 0 3.527.674c.444.674.04 1.619-.77 3.508l-.428 1c-.378.882-.567 1.322-.943 1.57s-.855.248-1.815.248H5.903c.105.54.271.856.506 1.091c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h7a.75.75 0 1 1 0 1.5h-7.055c-1.367 0-2.47 0-3.337-.117c-.9-.12-1.658-.38-2.26-.981c-.601-.602-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713 0-1.185-.042-1.546c-.04-.342-.107-.507-.194-.626c-.086-.12-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.53l-.265-.088a.75.75 0 0 1-.474-.948M8 8.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartLargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeBoldDuotoneIcon],svg[solar-cart-large-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.289 2.763a.75.75 0 0 1 .948-.475l.265.089l.04.013c.626.209 1.155.385 1.572.579c.442.206.826.46 1.117.865c.291.403.412.848.467 1.333c.052.456.052 1.014.052 1.674V9.5c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h7a.75.75 0 0 1 0 1.5h-7.055c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713 0-1.185-.042-1.546c-.04-.342-.107-.506-.194-.626c-.086-.12-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.53l-.265-.087a.75.75 0 0 1-.474-.95" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.745 6q.006.39.005.841V9.5c0 1.435.002 2.437.103 3.192q.023.165.05.308h10.12c.959 0 1.438 0 1.814-.248s.565-.688.942-1.57l.43-1c.809-1.89 1.213-2.834.769-3.508S18.506 6 16.45 6z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 9A.75.75 0 0 1 8 8.25h3a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m.25 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M18 19.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class SolarCartLargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeBrokenIcon],svg[solar-cart-large-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M11 9H8M2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h2m6 0h-2"></svg:path><svg:path stroke-linecap="round" d="M5 6h3m-2.5 7h10.522c.96 0 1.439 0 1.815-.248s.564-.688.942-1.57l.429-1c.81-1.89 1.214-2.833.77-3.508C19.533 6 18.505 6 16.45 6H12"></svg:path></svg:g>`,
})
export class SolarCartLargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeLineDuotoneIcon],svg[solar-cart-large-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"></svg:path><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M11 9H8" opacity=".5"></svg:path><svg:path d="M5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"></svg:path></svg:g>`,
})
export class SolarCartLargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeLinearIcon],svg[solar-cart-large-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"></svg:path><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M11 9H8"></svg:path><svg:path d="M5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"></svg:path></svg:g>`,
})
export class SolarCartLargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticBoldIcon],svg[solar-cart-large-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.084 2.751a.75.75 0 0 1 .956-.459l.302.106c.616.217 1.14.401 1.552.603c.44.217.819.483 1.103.899c.282.412.398.865.452 1.362q.035.333.043.738h10.639c1.685 0 3.201 0 3.645.577s.27 1.447-.076 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.025 2.742c-.551.45-1.332.45-2.893.45H10.98c-2.789 0-4.183 0-5.05-.914S5 12.582 5 9.64V7.038c0-.74 0-1.235-.041-1.615c-.04-.363-.11-.545-.2-.677c-.088-.129-.221-.25-.525-.398c-.322-.158-.761-.314-1.429-.549l-.261-.091a.75.75 0 0 1-.459-.957M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartLargeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticBoldDuotoneIcon],svg[solar-cart-large-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.64h15.725c.33-1.658.485-2.5.052-3.063C20.332 6 18.815 6 17.13 6H6.492a9 9 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.2 12.187l.5-2.424l.024-.123H5c0 2.941.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.743" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartLargeMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticBrokenIcon],svg[solar-cart-large-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartLargeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticLineDuotoneIcon],svg[solar-cart-large-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path></svg:g>`,
})
export class SolarCartLargeMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticLinearIcon],svg[solar-cart-large-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path></svg:g>`,
})
export class SolarCartLargeMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticOutlineIcon],svg[solar-cart-large-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.249 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.76c0 1.453.014 2.5.151 3.3c.146.854.438 1.466.985 2.042c.594.627 1.346.9 2.243 1.026c.858.122 1.948.122 3.293.122h5.406c.742 0 1.366 0 1.87-.062c.537-.065 1.025-.209 1.452-.556c.426-.348.665-.797.837-1.309c.163-.482.289-1.093.439-1.82l.508-2.469l.002-.005l.01-.052c.165-.825.303-1.519.338-2.077c.036-.586-.031-1.164-.413-1.66c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.002-.21c-.687-.076-1.522-.076-2.34-.076H5.667l-.01-.108c-.054-.497-.17-.95-.453-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603zm3.46 4.578h11.38c.856 0 1.61.001 2.205.067c.296.034.517.08.672.134a.6.6 0 0 1 .176.086c.062.082.128.23.102.651c-.027.444-.143 1.036-.321 1.926v.002l-.5 2.42c-.16.783-.27 1.303-.399 1.688c-.123.366-.239.523-.364.625s-.303.184-.685.23c-.404.05-.935.051-1.734.051h-5.303c-1.417 0-2.4-.002-3.14-.107c-.716-.101-1.093-.285-1.366-.573c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zM7.5 21.75a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m9.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartLargeMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeOutlineIcon],svg[solar-cart-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 9A.75.75 0 0 1 8 8.25h3a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.289 2.763a.75.75 0 0 1 .948-.475l.305.102c.626.209 1.155.385 1.572.579c.442.206.826.46 1.117.865c.291.403.412.848.467 1.333l.009.083h10.804c.976 0 1.792 0 2.417.092c.651.097 1.28.318 1.676.92c.396.6.352 1.265.184 1.902c-.16.61-.482 1.36-.867 2.258l-.467 1.089c-.176.412-.332.775-.493 1.062c-.175.31-.388.592-.711.805s-.667.298-1.021.337c-.328.035-.722.035-1.17.035H6.154c.074.134.159.244.255.341c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h8a.75.75 0 0 1 0 1.5h-8.055c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713 0-1.185-.042-1.546c-.04-.342-.107-.506-.194-.626c-.086-.12-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.53l-.265-.087a.75.75 0 0 1-.474-.95m4.518 9.487h10.215c.496 0 .809-.001 1.046-.027c.219-.023.303-.062.356-.097s.122-.097.23-.289c.117-.208.24-.495.436-.95l.429-1c.414-.968.69-1.616.819-2.106c.126-.476.062-.62.014-.694c-.049-.073-.157-.189-.644-.26c-.501-.075-1.205-.077-2.257-.077H5.75V9.5c0 1.172 0 2.054.056 2.75m1.694 9.5a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m7.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartLargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLineDuotoneIcon],svg[solar-cart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" opacity=".5"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path></svg:g>`,
})
export class SolarCartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLinearIcon],svg[solar-cart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path></svg:g>`,
})
export class SolarCartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartOutlineIcon],svg[solar-cart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.418 3.25c.28-.59.883-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.493.539 1.127.776 1.998l.037.136l.59 2.167a3 3 0 0 1 1.01.828c.622.797.732 1.746.622 2.834c-.108 1.056-.44 2.386-.856 4.051l-.027.105c-.263 1.053-.477 1.908-.73 2.575c-.266.696-.602 1.266-1.157 1.699c-.554.433-1.189.62-1.928.71c-.709.084-1.59.084-2.675.084H9.638c-1.085 0-1.967 0-2.675-.085c-.74-.088-1.374-.276-1.929-.71c-.554-.432-.89-1.002-1.156-1.698c-.254-.667-.467-1.522-.73-2.575l-.027-.105c-.416-1.665-.749-2.995-.856-4.05c-.11-1.09 0-2.038.621-2.835c.283-.362.622-.63 1.01-.828l.59-2.167l.038-.136c.237-.871.409-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222m.001 1.502c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635L5.58 8.389c1.038-.139 2.378-.139 4.042-.139h4.755c1.665 0 3.005 0 4.042.139l-.353-1.297c-.291-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 0 0 0-.5zM5.7 9.886c-.91.132-1.351.372-1.63.73c-.28.357-.405.842-.312 1.758c.095.936.4 2.16.834 3.9c.278 1.108.47 1.876.69 2.45c.21.554.417.847.677 1.05c.259.202.593.331 1.183.402c.61.073 1.4.074 2.544.074h4.63c1.143 0 1.935-.001 2.544-.074c.59-.07.924-.2 1.183-.402c.26-.203.466-.496.678-1.05c.218-.574.411-1.342.688-2.45c.435-1.74.74-2.964.834-3.9c.094-.916-.032-1.402-.311-1.759s-.72-.597-1.631-.729c-.93-.134-2.192-.136-3.985-.136h-4.63c-1.793 0-3.055.002-3.985.136" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusBoldIcon],svg[solar-cart-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zM13 8.25a.75.75 0 0 1 .75.75v1.25H15a.75.75 0 0 1 0 1.5h-1.25V13a.75.75 0 0 1-1.5 0v-1.25H11a.75.75 0 0 1 0-1.5h1.25V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartPlusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusBoldDuotoneIcon],svg[solar-cart-plus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path><svg:path fill="currentColor" d="M2.084 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362q.035.333.044.738H17.13c1.685 0 3.202 0 3.646.577s.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.472 2.293-1.024 2.742c-.552.45-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.914s-.93-1.884-.93-4.826V7.038c0-.74 0-1.235-.042-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z"></svg:path>`,
})
export class SolarCartPlusBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusBrokenIcon],svg[solar-cart-plus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M13 13v-2m0 0V9m0 2h2m-2 0h-2M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartPlusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusLineDuotoneIcon],svg[solar-cart-plus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 13v-2m0 0V9m0 2h2m-2 0h-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCartPlusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusLinearIcon],svg[solar-cart-plus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path fill="currentColor" d="m2.261 3.092l.249-.708zm-.012-.8a.75.75 0 1 0-.498 1.416zm2.337 2.031l.62-.423zm1.302 10.263l-.545.516zm14.77-4.703l.734.151l.001-.004zm-.5 2.425l.735.15zm.576-5.61l-.594.456zm-1.6 8.352l-.474-.581zM5.708 9.76V7.038h-1.5V9.76zM2.51 2.384l-.261-.092l-.498 1.416l.261.091zm8.428 13.866h5.302v-1.5h-5.302zm-5.23-9.212c0-.707.001-1.297-.05-1.776c-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677c.041.38.042.875.042 1.615zM2.012 3.8c.668.235 1.107.39 1.43.55c.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899c-.42-.206-.958-.394-1.592-.617zm2.196 5.96c0 1.453.014 2.5.15 3.3c.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107c-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026c.87.124 1.98.122 3.351.122zm-5.98-7.88h12.13v-1.5H4.959zm14.965 2.861l-.5 2.425l1.47.303l.5-2.425zM17.09 6.87c.856 0 1.61.001 2.205.067q.441.052.672.134c.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.6 4.6 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076zm4.304 3.16c.17-.848.313-1.56.348-2.13c.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654c-.027.444-.144 1.037-.322 1.928zm-5.153 6.22c.762 0 1.401.001 1.917-.062c.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23c-.403.05-.934.051-1.734.051zm3.184-4.094c-.162.783-.27 1.303-.4 1.688c-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309c.166-.492.294-1.118.448-1.864z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 13v-2m0 0V9m0 2h2m-2 0h-2"></svg:path></svg:g>`,
})
export class SolarCartPlusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusOutlineIcon],svg[solar-cart-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.293 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362l.011.108H17.12c.819 0 1.653 0 2.34.077c.35.039.697.101 1.003.209c.3.105.631.278.866.584c.382.496.449 1.074.413 1.66c-.035.558-.173 1.252-.338 2.077l-.01.053l-.002.004l-.508 2.47c-.15.726-.276 1.337-.439 1.82c-.172.51-.41.96-.837 1.308c-.427.347-.916.49-1.451.556c-.505.062-1.13.062-1.87.062H10.88c-1.345 0-2.435 0-3.293-.122c-.897-.127-1.65-.4-2.243-1.026c-.547-.576-.839-1.188-.985-2.042c-.137-.8-.15-1.848-.15-3.3V7.038c0-.74-.002-1.235-.043-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957M5.708 6.87v2.89c0 1.489.018 2.398.13 3.047c.101.595.274.925.594 1.263c.273.288.65.472 1.365.573c.74.105 1.724.107 3.14.107h5.304c.799 0 1.33-.001 1.734-.05c.382-.047.56-.129.685-.231s.24-.26.364-.625c.13-.385.238-.905.4-1.688l.498-2.42v-.002c.178-.89.295-1.482.322-1.926c.026-.421-.04-.569-.101-.65a.6.6 0 0 0-.177-.087a3.2 3.2 0 0 0-.672-.134c-.595-.066-1.349-.067-2.205-.067zM5.25 19.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m6.75-.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseBoldIcon],svg[solar-case-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.276 2.255c.083-.005.171-.005.285-.005h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.031.077.06.16.095.268l.003.01c.084.224.275.479.543.683q.045.034.09.064c2.153.003 3.278.042 4.052.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434c.775-.63 1.899-.67 4.053-.673q.045-.03.09-.064c.267-.204.459-.46.542-.683c.038-.114.066-.2.098-.279a2.75 2.75 0 0 1 2.385-1.719m4.543 2.563q.035.093.08.182H9.101q.043-.09.08-.182v-.003l.005-.01l.005-.012l.005-.012l.003-.01l.002-.005l.004-.012l.004-.012l.002-.006l.003-.008l.002-.007l.002-.006c.039-.116.051-.153.063-.181a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002c.482.03.904.334 1.085.782c.01.028.023.063.062.181l.002.006l.002.007l.003.008l.002.006l.004.012l.004.012l.002.005l.004.01l.004.012l.005.012l.004.01zM14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5m-5.99 2.87l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseBoldDuotoneIcon],svg[solar-case-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.561 2.25c-.113 0-.201 0-.285.005a2.75 2.75 0 0 0-2.385 1.72c-.032.079-.06.164-.099.278c-.083.224-.274.479-.542.683q-.045.034-.09.064h1.942q.044-.09.08-.182l.001-.003l.004-.01l.005-.012l.005-.012l.004-.01l.001-.005l.005-.012l.003-.012l.003-.006l.002-.008l.002-.007l.002-.006c.04-.116.052-.153.063-.181a1.25 1.25 0 0 1 1.085-.782c.032-.002.071-.002.215-.002h2.837c.144 0 .183 0 .216.002c.482.03.904.334 1.084.782c.011.028.023.063.063.181l.002.006l.002.007l.003.008l.002.006l.003.012l.005.012l.001.005l.004.01l.005.012l.004.012l.005.01l.001.003q.036.093.08.182h1.942q-.045-.03-.09-.064c-.268-.204-.459-.46-.542-.683l-.003-.01c-.036-.107-.064-.191-.095-.269a2.75 2.75 0 0 0-2.386-1.719a5 5 0 0 0-.285-.005z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.192 5H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 6.633C2 7.277 2 8.12 2 9.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 12.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.65 4.65 0 0 0 3.506 0l.56-.227a1.91 1.91 0 0 0 1.187-1.767V12.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824c0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 5 18.88 5 17.192 5M13.6 12h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.41.41 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3 11.3l.142.043L8.5 12.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.65 4.65 0 0 0 3.506 0l.56-.227a1.91 1.91 0 0 0 1.187-1.767V12.95l5.358-1.607L21 11.3v1c0 3.675-.035 7.388-1.318 8.528C18.364 22 16.242 22 12 22s-6.364 0-7.682-1.172C3.035 19.688 3.001 15.975 3 12.3z" opacity=".5"></svg:path>`,
})
export class SolarCaseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseBrokenIcon],svg[solar-case-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12 21.25a.75.75 0 0 0 0 1.5zm-7.682-.422l.498-.56zm15.364 0l-.498-.56zM7.955 22.684a.75.75 0 1 0 .09-1.498zM2.25 12c0 1.874 0 3.83.169 5.466c.085.82.215 1.589.422 2.244c.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008c-.164-.52-.28-1.178-.36-1.948c-.16-1.543-.161-3.415-.161-5.312zM12 22.75c2.102 0 3.746.001 5.027-.152c1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84c-1.17.14-2.709.142-4.849.142zm-3.955-1.564c-1.714-.103-2.613-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295zm12.205-8.799c0 1.832-.013 3.616-.178 5.08c-.082.731-.2 1.353-.36 1.845c-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61c.206-.628.338-1.362.426-2.144c.176-1.562.186-3.432.187-5.247z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.66 14.202l3.004-.901m-8.324.9L3.332 12.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434C3.934 5 5.159 5 7.609 5h8.782c2.45 0 3.675 0 4.502.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.15.17-.369.26-.75.38"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.116 1.3 1.939 1.32"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z"></svg:path></svg:g>`,
})
export class SolarCaseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseLineDuotoneIcon],svg[solar-case-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172S21 15.771 21 12" opacity=".5"></svg:path><svg:path d="m14.66 14.202l6.008-1.802c.595-.179.893-.268 1.082-.482a1 1 0 0 0 .1-.134c.15-.243.15-.553.15-1.175c0-2.45 0-3.675-.673-4.502a3 3 0 0 0-.434-.434C20.066 5 18.841 5 16.391 5H7.61c-2.45 0-3.675 0-4.502.673q-.24.195-.434.434C2 6.934 2 8.159 2 10.609c0 .622 0 .932.15 1.175q.045.07.1.134c.19.214.487.303 1.082.482l6.008 1.802"></svg:path><svg:path d="M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.116 1.3 1.939 1.32" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z"></svg:path></svg:g>`,
})
export class SolarCaseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseLinearIcon],svg[solar-case-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172S21 15.771 21 12"></svg:path><svg:path d="m14.66 14.202l6.008-1.802c.595-.179.893-.268 1.082-.482a1 1 0 0 0 .1-.134c.15-.243.15-.553.15-1.175c0-2.45 0-3.675-.673-4.502a3 3 0 0 0-.434-.434C20.066 5 18.841 5 16.391 5H7.61c-2.45 0-3.675 0-4.502.673q-.24.195-.434.434C2 6.934 2 8.159 2 10.609c0 .622 0 .932.15 1.175q.045.07.1.134c.19.214.487.303 1.082.482l6.008 1.802M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.116 1.3 1.939 1.32"></svg:path><svg:path stroke-linecap="round" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z"></svg:path></svg:g>`,
})
export class SolarCaseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticBoldIcon],svg[solar-case-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.162 8.5C2 9.603 2 11.05 2 13c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13c0-1.95 0-3.396-.162-4.5c-2.277 1.48-3.736 2.424-5.088 3.005V12a.75.75 0 0 1-1.5.017a12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 12v-.495C5.898 10.923 4.44 9.98 2.162 8.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.581 2.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72a8 8 0 0 0-.12.343l-.004.012a1.63 1.63 0 0 1-.504.695q-.341.011-.653.03c-1.644.096-2.687.366-3.437 1.117a3 3 0 0 0-.592.838q.087.03.167.081c2.1 1.365 3.42 2.22 4.517 2.767A.75.75 0 0 1 8.75 10v.458c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.487-.142c1.096-.548 2.416-1.402 4.516-2.767a.8.8 0 0 1 .167-.081a3 3 0 0 0-.592-.838c-.75-.75-1.793-1.02-3.437-1.118q-.296-.016-.618-.028l-.04-.034a1.9 1.9 0 0 1-.525-.74l-.003-.009c-.036-.107-.063-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719a5 5 0 0 0-.285-.005zm4.237 2.566l-.005-.011l-.005-.012l-.004-.012l-.004-.01l-.002-.005l-.004-.012l-.004-.012l-.002-.006l-.003-.008l-.002-.007l-.002-.006a4 4 0 0 0-.062-.181a1.25 1.25 0 0 0-1.085-.782a4 4 0 0 0-.215-.002h-2.838c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782l-.003.007l-.008.021a6 6 0 0 0-.077.23l-.002.006l-.003.007l-.002.008l-.002.006l-.004.012l-.004.012l-.002.005l-.004.01l-.004.012l-.005.012l-.004.01l-.001.001l-.044.108L10 5h4.896a3 3 0 0 1-.078-.184" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticBoldDuotoneIcon],svg[solar-case-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.581 2.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72a8 8 0 0 0-.12.343l-.004.012a1.63 1.63 0 0 1-.505.695q-.34.011-.652.03c-1.644.096-2.687.366-3.438 1.117c-.244.244-.438.52-.59.838q.086.03.166.081c2.1 1.365 3.42 2.22 4.516 2.767A.75.75 0 0 1 8.75 10v.458c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.486-.142c1.097-.548 2.417-1.402 4.517-2.767a.8.8 0 0 1 .167-.081a3 3 0 0 0-.592-.838c-.75-.75-1.793-1.02-3.437-1.118q-.296-.016-.618-.028l-.04-.034a1.9 1.9 0 0 1-.525-.74l-.003-.009c-.036-.107-.064-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719a5 5 0 0 0-.286-.005zm4.237 2.566l-.005-.011l-.005-.012l-.005-.012l-.003-.01l-.002-.005l-.004-.012l-.004-.012l-.002-.006l-.003-.008l-.002-.007l-.002-.006a4 4 0 0 0-.063-.181a1.25 1.25 0 0 0-1.084-.782a4 4 0 0 0-.215-.002h-2.838c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782l-.003.007l-.008.021a6 6 0 0 0-.078.23l-.001.006l-.003.007l-.002.008l-.002.006l-.004.012l-.005.012l-.001.005l-.004.01l-.005.012l-.004.012l-.005.01v.001l-.044.108L10 5h4.896a3 3 0 0 1-.079-.184" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2.162 8.5C2 9.603 2 11.05 2 13c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13c0-1.95 0-3.397-.162-4.5c-2.277 1.48-3.736 2.423-5.088 3.005V12a.75.75 0 0 1-1.5.016a12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 12v-.496C5.898 10.924 4.44 9.98 2.162 8.5" opacity=".5"></svg:path>`,
})
export class SolarCaseMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticBrokenIcon],svg[solar-case-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14c0-3.771 0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828"></svg:path><svg:path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.007 1.354 1.83 1.374"></svg:path><svg:path stroke-linecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2"></svg:path></svg:g>`,
})
export class SolarCaseMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticLineDuotoneIcon],svg[solar-case-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6Z"></svg:path><svg:path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.007 1.354 1.83 1.374" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 11v2m8-2v2"></svg:path></svg:g>`,
})
export class SolarCaseMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticLinearIcon],svg[solar-case-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6Z"></svg:path><svg:path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.007 1.354 1.83 1.374"></svg:path><svg:path stroke-linecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2"></svg:path></svg:g>`,
})
export class SolarCaseMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticOutlineIcon],svg[solar-case-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.561 2.25h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.032.077.06.16.095.268l.032.097l.03.085c.177.49.613.83 1.068.875l.1.006c1.677.099 2.966.378 3.924 1.335c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.958-.957 2.248-1.236 3.924-1.335l.1-.006c.455-.044.892-.385 1.07-.875l.028-.085l.032-.097c.036-.107.064-.191.095-.269a2.75 2.75 0 0 1 2.385-1.719c.084-.005.172-.005.286-.005m-3.92 4.554q.068-.002.133-.008C7.647 6.75 8.697 6.75 10 6.75h4c1.303 0 2.353 0 3.226.046q.066.006.132.008c1.604.095 2.398.356 2.94.898a2.3 2.3 0 0 1 .477.7c-1.827 1.186-3.028 1.95-4.038 2.456A.75.75 0 0 0 15.25 11v.458c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.487-.142c-1.01-.505-2.21-1.27-4.038-2.457a2.3 2.3 0 0 1 .477-.7c.542-.541 1.336-.802 2.94-.897m-3.78 3.149c-.11.996-.111 2.286-.111 4.047c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289c0-1.76-.001-3.05-.11-4.047c-1.887 1.223-3.181 2.032-4.39 2.552V13a.75.75 0 0 1-1.5.016a12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 13v-.495c-1.208-.52-2.503-1.33-4.39-2.552m12.131-4.702l-.971-.001H9.009a3 3 0 0 0 .174-.428l.003-.008l.026-.077a4 4 0 0 1 .07-.203a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002c.482.03.904.334 1.085.782c.012.03.024.067.07.203l.028.085m.039.113q.058.163.136.316z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseOutlineIcon],svg[solar-case-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.581 1.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72c-.031.077-.059.16-.095.269l-.006.019l-.026.077l-.029.085c-.16.442-.691.811-1.253.825l-1.82.09c-.786.092-1.459.288-2.028.751a4 4 0 0 0-.542.542c-.463.57-.66 1.242-.752 2.029c-.089.76-.089 1.715-.089 2.9v.078c0 .284 0 .55.023.774c.025.248.083.512.24.766q.078.124.175.234c.169.191.365.315.562.406c.003 1.616.024 3.248.169 4.646c.085.82.215 1.589.422 2.245c.203.645.503 1.256.979 1.678c.823.732 1.86 1.055 3.153 1.21c1.27.151 2.898.151 4.976.151h.102c2.078 0 3.706 0 4.976-.152c1.293-.154 2.33-.477 3.153-1.209c.476-.422.776-1.033.98-1.678c.206-.656.336-1.425.421-2.245c.145-1.398.166-3.03.169-4.646a1.66 1.66 0 0 0 .736-.64c.158-.254.216-.518.241-.766c.023-.224.023-.49.023-.774v-.078c0-1.185 0-2.14-.09-2.9c-.092-.787-.288-1.46-.751-2.029a4 4 0 0 0-.542-.542c-.57-.463-1.242-.66-2.029-.752L17.52 4.25c-.562-.014-1.093-.383-1.253-.825l-.029-.085l-.032-.097c-.036-.107-.063-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719a5 5 0 0 0-.285-.005zm-3.01 4.5h8.859c1.222 0 2.078.002 2.733.079c.646.076.999.216 1.257.426q.18.146.325.325c.21.258.35.611.426 1.257c.078.662.079 1.529.079 2.772c0 .326 0 .515-.015.654a.5.5 0 0 1-.023.125l-.024.033a.5.5 0 0 1-.114.058c-.129.054-.31.109-.622.202l-5.202 1.561V13c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v.242l-5.202-1.56a7 7 0 0 1-.622-.203a.5.5 0 0 1-.114-.058l5.938 1.821l-5.962-1.854a.5.5 0 0 1-.023-.125a7 7 0 0 1-.015-.654c0-1.243.001-2.11.079-2.772c.076-.646.216-.999.426-1.257a2.3 2.3 0 0 1 .325-.325c.258-.21.611-.35 1.257-.426c.655-.077 1.51-.079 2.733-.079m3.01-3c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782a4 4 0 0 0-.07.203l-.029.085l-.038.113q-.06.164-.14.315h5.99a2.5 2.5 0 0 1-.178-.428l-.028-.085a4 4 0 0 0-.07-.203a1.25 1.25 0 0 0-1.085-.782a4 4 0 0 0-.215-.002zM3.752 13.309c.007 1.437.036 2.817.159 4.003c.08.77.196 1.427.36 1.948c.168.53.362.845.545 1.008c.495.44 1.178.703 2.335.84c1.17.14 2.709.142 4.849.142s3.678-.001 4.849-.141c1.157-.138 1.84-.402 2.335-.841c.183-.163.377-.478.545-1.008c.164-.52.28-1.178.36-1.948c.123-1.186.152-2.567.159-4.003l-4.998 1.499v.354c0 .51-.311.97-.786 1.16l-.7.28a4.75 4.75 0 0 1-3.528 0l-.7-.28a1.25 1.25 0 0 1-.786-1.16v-.354zm6.498-.059v1.742l.543.217c.775.31 1.64.31 2.414 0l.543-.217V13.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundBoldIcon],svg[solar-case-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75c-.978 0-1.813.625-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.073 0a.75.75 0 1 1-1.415.5A2.25 2.25 0 0 0 12 2.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="currentColor" d="m8.01 15.37l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65M7.609 5h8.782c2.45 0 3.675 0 4.502.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434C3.934 5 5.159 5 7.609 5"></svg:path>`,
})
export class SolarCaseRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundBoldDuotoneIcon],svg[solar-case-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 13.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.65 4.65 0 0 0 3.506 0l.56-.227a1.91 1.91 0 0 0 1.187-1.767V13.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824c0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6M13.6 13h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.41.41 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.958 12.313l-.034.01L15.5 13.95v1.213c0 .765-.46 1.471-1.187 1.767l-.56.227a4.65 4.65 0 0 1-3.506 0l-.56-.227A1.91 1.91 0 0 1 8.5 15.163V13.95L3 12.3c0 3.675.035 7.388 1.318 8.528C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.283-1.14 1.317-4.853 1.318-8.528z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCaseRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundBrokenIcon],svg[solar-case-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.17 4a3.001 3.001 0 0 1 5.66 0"></svg:path><svg:path fill="currentColor" d="M12 22.25a.75.75 0 0 0 0 1.5zm-7.682-.422l.498-.56zm15.364 0l-.498-.56zM7.955 23.684a.75.75 0 1 0 .09-1.498zM2.25 13c0 1.874 0 3.83.169 5.466c.085.82.215 1.589.422 2.244c.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008c-.164-.52-.28-1.178-.36-1.948c-.16-1.543-.161-3.415-.161-5.312zM12 23.75c2.102 0 3.746.001 5.027-.152c1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84c-1.17.14-2.709.142-4.849.142zm-3.955-1.564c-1.714-.103-2.613-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295zm12.205-8.799c0 1.832-.013 3.616-.178 5.08c-.082.731-.2 1.353-.36 1.845c-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61c.206-.628.338-1.362.426-2.144c.176-1.562.186-3.432.187-5.247z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.66 15l3.004-.783M9.34 15l-6.008-1.567c-.595-.155-.893-.233-1.082-.419a1 1 0 0 1-.1-.116C2 12.688 2 12.417 2 11.876c0-2.13 0-3.195.673-3.914q.195-.207.434-.377C3.934 7 5.159 7 7.609 7h8.782c2.45 0 3.675 0 4.502.585q.24.17.434.377c.673.72.673 1.784.673 3.914c0 .54 0 .811-.15 1.022a1 1 0 0 1-.1.116c-.15.148-.369.227-.75.331"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 13.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.465V14a.5.5 0 0 0-.5-.5Z"></svg:path></svg:g>`,
})
export class SolarCaseRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundLineDuotoneIcon],svg[solar-case-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172S21 15.771 21 12" opacity=".5"></svg:path><svg:path d="m14.66 14.202l6.198-1.86c.41-.123.616-.184.768-.306a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824c0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307l6.197 1.859"></svg:path><svg:path stroke-linecap="round" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z"></svg:path><svg:path stroke-linecap="round" d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCaseRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundLinearIcon],svg[solar-case-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172S21 15.771 21 12"></svg:path><svg:path d="m14.66 14.202l6.198-1.86c.41-.123.616-.184.768-.306a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824c0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307l6.197 1.859"></svg:path><svg:path stroke-linecap="round" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5ZM9.17 4a3.001 3.001 0 0 1 5.66 0"></svg:path></svg:g>`,
})
export class SolarCaseRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticBoldIcon],svg[solar-case-round-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.878 4.25a2.251 2.251 0 0 1 4.244 0a.75.75 0 1 0 1.414-.5a3.751 3.751 0 0 0-7.073 0a.75.75 0 0 0 1.415.5m-7.13 3.84a.8.8 0 0 0-.168-.081a3 3 0 0 1 .592-.838C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172a3 3 0 0 1 .592.838a.8.8 0 0 0-.167.081c-2.1 1.365-3.42 2.22-4.516 2.767A.75.75 0 0 0 15.25 11v.458c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.487-.142C6.167 10.31 4.847 9.456 2.747 8.09M2 14c0-1.95 0-3.396.162-4.5c2.277 1.48 3.736 2.423 5.088 3.005V13a.75.75 0 0 0 1.5.016c2.13.562 4.37.562 6.5 0a.75.75 0 0 0 1.5-.016v-.495c1.352-.582 2.811-1.525 5.088-3.005C22 10.604 22 12.05 22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseRoundMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticBoldDuotoneIcon],svg[solar-case-round-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.878 4.25a2.251 2.251 0 0 1 4.244 0a.75.75 0 1 0 1.414-.5a3.751 3.751 0 0 0-7.073 0a.75.75 0 1 0 1.415.5m-7.13 3.84a.8.8 0 0 0-.168-.081c.153-.318.347-.594.591-.838C4.343 6 6.23 6 10 6h4c3.771 0 5.657 0 6.828 1.172a3 3 0 0 1 .592.838a.8.8 0 0 0-.167.081c-2.1 1.365-3.42 2.22-4.517 2.767A.75.75 0 0 0 15.25 11v.458c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.487-.142C6.167 10.31 4.847 9.456 2.747 8.09" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 14c0-1.95 0-3.397.162-4.5c2.277 1.48 3.736 2.423 5.088 3.004V13a.75.75 0 0 0 1.5.016c2.13.562 4.37.562 6.5 0a.75.75 0 0 0 1.5-.016v-.495c1.352-.582 2.811-1.525 5.088-3.005C22 10.604 22 12.05 22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" opacity=".5"></svg:path>`,
})
export class SolarCaseRoundMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticBrokenIcon],svg[solar-case-round-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2M9.17 4a3.001 3.001 0 0 1 5.66 0"></svg:path><svg:path d="M22 14c0-3.771 0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828"></svg:path></svg:g>`,
})
export class SolarCaseRoundMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticLineDuotoneIcon],svg[solar-case-round-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path stroke-linecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 11v2m8-2v2"></svg:path><svg:path stroke-linecap="round" d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCaseRoundMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticLinearIcon],svg[solar-case-round-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path stroke-linecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2M9.17 4a3.001 3.001 0 0 1 5.66 0"></svg:path></svg:g>`,
})
export class SolarCaseRoundMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticOutlineIcon],svg[solar-case-round-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 5.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 6.89c-1.006.135-1.586.389-2.01.812a2.3 2.3 0 0 0-.476.7c1.827 1.186 3.028 1.95 4.038 2.456A.75.75 0 0 1 8.75 11v.458c2.12.64 4.38.64 6.5 0V11a.75.75 0 0 1 1.486-.142c1.011-.505 2.212-1.27 4.039-2.457a2.3 2.3 0 0 0-.477-.7c-.423-.422-1.003-.676-2.009-.811c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14m15.43 3.063c-1.887 1.223-3.181 2.032-4.39 2.552V13a.75.75 0 0 1-1.5.016a12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 13v-.495c-1.208-.52-2.503-1.33-4.39-2.552c-.109.996-.11 2.286-.11 4.047c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289c0-1.76-.001-3.05-.11-4.047M12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 1 1-1.414-.5a3.751 3.751 0 0 1 7.072 0a.75.75 0 0 1-1.414.5A2.25 2.25 0 0 0 12 2.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseRoundMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundOutlineIcon],svg[solar-case-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.775 5.25h10.45c.816 0 1.474 0 2.007.044c.55.045 1.031.14 1.477.368c.7.359 1.27.929 1.629 1.629c.228.446.323.928.368 1.477c.044.533.044 1.191.044 2.007v.119c.001.338.002.698-.128 1.02a1.75 1.75 0 0 1-.526.706a1.6 1.6 0 0 1-.347.21c-.003 1.612-.023 3.24-.168 4.636c-.085.82-.215 1.589-.422 2.244c-.203.646-.504 1.256-.979 1.679c-.823.732-1.86 1.055-3.153 1.21c-1.27.151-2.898.151-4.976.151h-.102c-2.078 0-3.706 0-4.976-.152c-1.294-.154-2.33-.477-3.153-1.209c-.476-.422-.776-1.033-.98-1.678c-.206-.656-.336-1.425-.421-2.245c-.145-1.395-.166-3.024-.169-4.637a1.6 1.6 0 0 1-.346-.209a1.75 1.75 0 0 1-.526-.706c-.13-.322-.13-.682-.128-1.02v-.119c0-.816 0-1.474.044-2.007c.045-.55.14-1.031.368-1.477a3.75 3.75 0 0 1 1.629-1.629c.445-.228.927-.323 1.476-.368c.534-.044 1.192-.044 2.008-.044m-3.023 8.059c.007 1.437.036 2.817.159 4.003c.08.77.196 1.427.36 1.948c.168.53.361.845.545 1.008c.495.44 1.178.703 2.335.84c1.17.14 2.709.142 4.849.142s3.678-.001 4.849-.141c1.157-.138 1.84-.402 2.335-.841c.183-.163.377-.478.544-1.008c.164-.52.281-1.178.361-1.948c.123-1.186.152-2.567.159-4.003l-4.998 1.499v.354c0 .51-.311.97-.786 1.16l-.7.28a4.75 4.75 0 0 1-3.528 0l-.7-.28a1.25 1.25 0 0 1-.786-1.16v-.354zm4.998-.067l-5.393-1.618a7 7 0 0 1-.43-.137a1 1 0 0 1-.085-.037a.25.25 0 0 1-.073-.099a1 1 0 0 1-.012-.091a7 7 0 0 1-.007-.452c0-.856 0-1.453.039-1.918c.037-.456.107-.717.208-.915a2.25 2.25 0 0 1 .977-.978c.199-.101.46-.17.916-.208c.465-.038 1.061-.039 1.918-.039h10.384c.856 0 1.453 0 1.918.039c.455.037.717.107.915.208c.42.215.762.557.978.978c.101.198.17.46.208.915c.038.465.039 1.062.039 1.918c0 .225 0 .355-.008.452a1 1 0 0 1-.011.091a.25.25 0 0 1-.074.099a1 1 0 0 1-.084.037a7 7 0 0 1-.43.137l-5.393 1.618V13c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25zm12.41-1.793l-.003.001zm.07-.096l.001-.002zm-18.46 0l-.001-.002zm.07.096l.002.001zm7.41 1.801v1.742l.543.217a3.25 3.25 0 0 0 2.414 0l.543-.217V13.25zM12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.073 0a.75.75 0 0 1-1.415.5A2.25 2.25 0 0 0 12 2.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutBoldIcon],svg[solar-cash-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6H9c-1.886 0-2.828 0-3.414.586S5 8.114 5 10v6.25h14V10c0-1.886 0-2.828-.586-3.414S16.886 6 15 6h-2.25v4.973l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794zM5.03 17.75h13.94c-.052.79-.189 1.297-.556 1.664C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586c-.367-.367-.504-.873-.555-1.664"></svg:path><svg:path fill="currentColor" d="M5.889 3H18.11C20.26 3 22 4.8 22 7.02c0 1.29-.587 2.437-1.5 3.173v-.282c0-.866 0-1.66-.087-2.305c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.646-.086-1.44-.086-2.306-.086H8.91c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.619.618-.844 1.37-.94 2.08c-.086.646-.086 1.44-.086 2.306v.282A4.06 4.06 0 0 1 2 7.02C2 4.8 3.741 3 5.889 3"></svg:path>`,
})
export class SolarCashOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutBoldDuotoneIcon],svg[solar-cash-out-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20h6c1.885 0 2.828 0 3.414-.586c.471-.471.563-1.174.581-2.414H5.004c.018 1.24.11 1.943.581 2.414C6.171 20 7.114 20 9 20" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 6H9c-1.886 0-2.828 0-3.414.586S5 8.114 5 10v6q-.001.551.004 1h13.992q.005-.449.004-1v-6c0-1.886 0-2.828-.586-3.414S16.886 6 15 6h-2.25v4.973l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794z"></svg:path><svg:path fill="currentColor" d="M18.111 3H5.89C3.74 3 2 4.8 2 7.02c0 1.905 1.28 3.5 3 3.915V10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v.935c1.72-.415 3-2.01 3-3.915C22 4.8 20.259 3 18.111 3" opacity=".5"></svg:path>`,
})
export class SolarCashOutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutBrokenIcon],svg[solar-cash-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5.889 3.75a.75.75 0 0 0 0-1.5zM10 2.25a.75.75 0 0 0 0 1.5zm8.111 1.5c1.71 0 3.139 1.44 3.139 3.27h1.5c0-2.61-2.054-4.77-4.639-4.77zM5.89 2.25c-2.585 0-4.639 2.16-4.639 4.77h1.5c0-1.83 1.429-3.27 3.139-3.27zm15.36 4.77c0 1.667-1.19 3.016-2.693 3.238l.22 1.484c2.265-.335 3.973-2.338 3.973-4.722zM5.443 10.258C3.939 10.036 2.75 8.688 2.75 7.02h-1.5c0 2.384 1.708 4.387 3.974 4.722zM10 3.75h8.111v-1.5H10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v5m0 0l2-2.333M12 14l-2-2.333"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M5 10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17h8m6 0h-2"></svg:path></svg:g>`,
})
export class SolarCashOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutLineDuotoneIcon],svg[solar-cash-out-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.667 12C20.55 11.721 22 10.046 22 8.02C22 5.8 20.259 4 18.111 4H5.89C3.74 4 2 5.8 2 8.02c0 2.026 1.449 3.701 3.333 3.98" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v7m0 0l2-2.333M12 14l-2-2.333"></svg:path><svg:path d="M5 11c0-1.886 0-2.828.586-3.414S7.114 7 9 7h6c1.886 0 2.828 0 3.414.586S19 9.114 19 11v6c0 1.886 0 2.828-.586 3.414S16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18h14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCashOutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutLinearIcon],svg[solar-cash-out-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.667 11C20.55 10.721 22 9.046 22 7.02C22 4.8 20.259 3 18.111 3H5.89C3.74 3 2 4.8 2 7.02C2 9.046 3.449 10.721 5.333 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 6v7m0 0l2-2.333M12 13l-2-2.333"></svg:path><svg:path d="M5 10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 17h14"></svg:path></svg:g>`,
})
export class SolarCashOutLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutOutlineIcon],svg[solar-cash-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 7.02c0-2.61 2.054-4.77 4.639-4.77H18.11c2.585 0 4.639 2.16 4.639 4.77c0 2.028-1.236 3.78-3 4.465v4.567q0 .465-.003.878a1 1 0 0 1-.003.163a11 11 0 0 1-.074 1.201c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65a11 11 0 0 1-.074-1.201a1 1 0 0 1-.003-.163q-.004-.413-.003-.878v-4.567c-1.764-.685-3-2.437-3-4.465m3 2.79c0-.838.004-1.54.08-2.104c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h6.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.076.564.08 1.267.08 2.105c.894-.572 1.5-1.6 1.5-2.79c0-1.83-1.429-3.27-3.139-3.27H5.89c-1.71 0-3.139 1.44-3.139 3.27c0 1.19.606 2.218 1.5 2.79m7-3.06H9c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C5.753 8.388 5.75 9.036 5.75 10v6.25h12.5V10c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2.25v4.223l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794zm6.968 11H5.782q.013.185.035.345c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788q.02-.16.034-.345" clip-rule="evenodd"></svg:path>`,
})
export class SolarCashOutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2BoldIcon],svg[solar-cassette-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 13.75a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m4.099 1.5h2.302a3 3 0 0 1-.401-1.5c0-.546.146-1.059.401-1.5H10.85c.255.441.401.954.401 1.5s-.146 1.059-.401 1.5m4.9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m18.431 4.152l-.77 2.053c-.223.596-.412 1.1-.613 1.496c-.214.42-.472.785-.868 1.06c-.396.274-.827.387-1.296.44c-.442.049-.98.049-1.616.049h-2.537c-.636 0-1.174 0-1.615-.05c-.47-.052-.9-.165-1.297-.44c-.396-.274-.654-.638-.867-1.06c-.201-.395-.39-.9-.614-1.495l-.77-2.053c-1.066.149-1.818.441-2.396 1.02C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828c-.578-.579-1.33-.871-2.397-1.02M5.25 13.75a3 3 0 0 1 3.167-2.995l.083-.005H16q.128 0 .243.04a3 3 0 0 1 0 5.92a.8.8 0 0 1-.243.04H8.5l-.083-.005q-.083.005-.167.005a3 3 0 0 1-3-3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m16.875 4.03l-.604 1.61c-.242.644-.402 1.07-.56 1.382c-.15.295-.267.423-.385.505s-.279.146-.609.183c-.348.039-.802.04-1.49.04h-2.455c-.687 0-1.141-.001-1.49-.04c-.33-.037-.49-.101-.608-.183s-.235-.21-.385-.505c-.159-.313-.319-.738-.56-1.381l-.604-1.61C7.939 4 8.887 4 10 4h4c1.112 0 2.06 0 2.875.03"></svg:path>`,
})
export class SolarCassette2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2BoldDuotoneIcon],svg[solar-cassette-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.228 8h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4h11l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24S14.57 8 13.228 8m.272 5.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m-7.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828c-.737-.737-1.756-1.01-3.35-1.112l-.505 1.344c-.47 1.256-.706 1.884-1.22 2.24S14.57 8 13.228 8h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.522 4.06c-1.594.101-2.613.375-3.35 1.112M15.75 16c-.01 0 .01 0 0 0a2.25 2.25 0 0 0 0-4.5h-7.5a2.25 2.25 0 0 0 0 4.5c-.01 0 .01 0 0 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCassette2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2BrokenIcon],svg[solar-cassette-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8.5 11.5H16M8.5 16H16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.228 8.5c1.34 0 2.011 0 2.525-.356s.75-.984 1.22-2.24L17.5 4.5m-11 0l.527 1.404c.47 1.256.706 1.884 1.22 2.24c.212.147.451.233.753.284"></svg:path></svg:g>`,
})
export class SolarCassette2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2LineDuotoneIcon],svg[solar-cassette-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path fill="currentColor" d="M8.5 10.75a.75.75 0 0 0 0 1.5zm7.5 1.5a.75.75 0 0 0 0-1.5zm-7.5 3a.75.75 0 0 0 0 1.5zm7.5 1.5a.75.75 0 0 0 0-1.5zm1.25-3a1.5 1.5 0 0 1-1.5 1.5v1.5a3 3 0 0 0 3-3zm-1.5-1.5a1.5 1.5 0 0 1 1.5 1.5h1.5a3 3 0 0 0-3-3zm-7.5 3a1.5 1.5 0 0 1-1.5-1.5h-1.5a3 3 0 0 0 3 3zm0-4.5a3 3 0 0 0-3 3h1.5a1.5 1.5 0 0 1 1.5-1.5zm.25 1.5H16v-1.5H8.5zm0 4.5H16v-1.5H8.5z"></svg:path><svg:path fill="currentColor" d="M15.75 15.25a1.5 1.5 0 0 1-1.5-1.5h-1.5a3 3 0 0 0 3 3zm0-4.5a3 3 0 0 0-3 3h1.5a1.5 1.5 0 0 1 1.5-1.5zm-6 3a1.5 1.5 0 0 1-1.5 1.5v1.5a3 3 0 0 0 3-3zm-1.5-1.5a1.5 1.5 0 0 1 1.5 1.5h1.5a3 3 0 0 0-3-3z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.5 4.5l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCassette2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2LinearIcon],svg[solar-cassette-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8.5 11.5H16M8.5 16H16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.5 4.5l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5"></svg:path></svg:g>`,
})
export class SolarCassette2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2OutlineIcon],svg[solar-cassette-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812l-.128-.017l-.5 1.333c-.223.595-.412 1.099-.613 1.495c-.213.42-.472.785-.868 1.06c-.396.274-.827.388-1.296.44c-.441.049-.98.049-1.616.049h-2.536c-.636 0-1.175 0-1.616-.05c-.469-.051-.9-.165-1.296-.44c-.396-.274-.654-.638-.868-1.06c-.201-.395-.39-.899-.613-1.494l-.5-1.333zm1.692-.119l.326.87c.241.644.402 1.068.56 1.38c.15.297.267.425.385.506s.279.146.608.183c.349.039.803.04 1.49.04h2.456c.687 0 1.141-.001 1.49-.04c.33-.037.49-.1.608-.183c.118-.081.234-.21.385-.505c.158-.313.319-.737.56-1.38l.326-.87A96 96 0 0 0 14 4.75h-4c-1.01 0-1.864 0-2.597.021M5.25 13.75a3 3 0 0 1 3.167-2.995l.083-.005H16q.128 0 .243.04a3 3 0 0 1 0 5.92a.8.8 0 0 1-.243.04H8.5l-.083-.005q-.083.005-.167.005a3 3 0 0 1-3-3m5.599 1.5h2.302a3 3 0 0 1-.401-1.5c0-.546.146-1.059.401-1.5H10.85c.255.441.401.954.401 1.5s-.146 1.059-.401 1.5m4.901 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-7.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path>`,
})
export class SolarCassette2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteBoldIcon],svg[solar-cassette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h1.25v3.75h-.478c-.687 0-1.141-.001-1.49-.04c-.33-.037-.49-.1-.608-.183c-.118-.081-.235-.21-.385-.505c-.159-.313-.319-.737-.56-1.38L7.125 4.03C7.939 4 8.887 4 10 4m5.75 8.25a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-9 1.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172c.578-.579 1.33-.871 2.396-1.02l.77 2.054c.224.595.413 1.1.614 1.495c.213.42.471.785.867 1.06c.396.274.828.388 1.297.44c.441.049.98.049 1.615.049h2.537c.636 0 1.174 0 1.615-.05c.47-.051.901-.165 1.297-.44c.396-.274.654-.638.868-1.06c.2-.395.39-.899.613-1.494l.77-2.054c1.067.149 1.82.441 2.397 1.02C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828m9.578 8.578a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-4.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.875 4.03C16.061 4 15.112 4 14 4h-1.25v3.75h.478c.687 0 1.141-.001 1.49-.04c.33-.037.49-.1.608-.183c.118-.081.234-.21.384-.505c.16-.313.32-.737.56-1.38z"></svg:path>`,
})
export class SolarCassetteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteBoldDuotoneIcon],svg[solar-cassette-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4v4h-1.228c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4z" clip-rule="evenodd" opacity=".4"></svg:path><svg:path fill="currentColor" d="M16.973 5.404L17.5 4H12v4h1.228c1.34 0 2.011 0 2.525-.356s.75-.984 1.22-2.24" opacity=".6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.171C2 6.343 2 8.23 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.829c-.737-.737-1.756-1.01-3.35-1.111l-.505 1.344c-.47 1.256-.706 1.884-1.22 2.24S14.57 8 13.228 8h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.522 4.06c-1.594.101-2.613.374-3.35 1.111M8.25 11.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m7.5 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCassetteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteBrokenIcon],svg[solar-cassette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.5 4.5l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5"></svg:path><svg:path stroke-linecap="round" d="M12 4v4.5"></svg:path></svg:g>`,
})
export class SolarCassetteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteLineDuotoneIcon],svg[solar-cassette-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.5 4.5l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5"></svg:path><svg:path stroke-linecap="round" d="M12 4v4.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCassetteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteLinearIcon],svg[solar-cassette-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.5 4.5l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5"></svg:path><svg:path stroke-linecap="round" d="M12 4v4.5"></svg:path></svg:g>`,
})
export class SolarCassetteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteOutlineIcon],svg[solar-cassette-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m1.306 1.5H10c-1.01 0-1.864 0-2.597.021l.326.87c.241.644.402 1.068.56 1.38c.15.297.267.425.385.506s.279.146.608.183c.349.039.803.04 1.49.04h.478zm1.5 3v-3H14c1.01 0 1.864 0 2.597.021l-.326.87c-.241.644-.402 1.068-.56 1.38c-.15.297-.267.425-.385.506s-.279.146-.608.183c-.349.039-.803.04-1.49.04zm-2.018 1.5c-.636 0-1.175 0-1.616-.05c-.469-.051-.9-.165-1.296-.44c-.396-.274-.654-.638-.868-1.06c-.201-.395-.39-.899-.613-1.494l-.5-1.333l-.128.017c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812l-.128-.017l-.5 1.333c-.223.595-.412 1.099-.613 1.495c-.213.42-.472.785-.868 1.06c-.396.274-.827.388-1.296.44c-.441.049-.98.049-1.616.049zm-5.482 4.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m4.5 1.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path>`,
})
export class SolarCassetteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatBoldIcon],svg[solar-cat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.75 6.406c-1.48 0-1.628.157-2.394.157C8.718 6.563 6.802 5 5.845 5S3.77 5.563 3.77 7.188v1.875c.002.492.18 2 .88 1.597c-.827.978-.91 2.119-.899 3.223c-.223.064-.45.137-.671.212c-.684.234-1.41.532-1.737.744a.75.75 0 0 0 .814 1.26c.156-.101.721-.35 1.408-.585l.228-.075c.046.433.161.83.332 1.19l-.024.013c-.41.216-.79.465-1.032.623l-.113.074a.75.75 0 1 0 .814 1.26l.131-.086c.245-.16.559-.365.901-.545q.12-.064.231-.116C6.763 19.475 9.87 20 11.75 20s4.987-.525 6.717-2.148q.11.052.231.116c.342.18.656.385.901.545l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074a13 13 0 0 0-1.032-.623l-.024-.013c.171-.36.286-.757.332-1.19l.228.075c.687.235 1.252.484 1.409.585a.75.75 0 0 0 .813-1.26c-.327-.212-1.053-.51-1.736-.744a16 16 0 0 0-.672-.213c.012-1.104-.072-2.244-.9-3.222c.7.403.88-1.105.881-1.598V7.188C19.73 5.563 18.613 5 17.655 5c-.957 0-2.873 1.563-3.51 1.563c-.767 0-.915-.157-2.395-.157m-.675 9.194c.202-.069.441-.1.675-.1s.473.031.676.1c.1.034.22.088.328.174a.62.62 0 0 1 .246.476c0 .23-.139.39-.246.476s-.229.14-.328.174c-.203.069-.442.1-.676.1s-.473-.031-.675-.1a1.1 1.1 0 0 1-.329-.174a.62.62 0 0 1-.246-.476c0-.23.139-.39.246-.476s.23-.14.329-.174m2.845-3.1c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813s-.068.573-.21.811c-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.6 1.6 0 0 1-.21-.812c0-.286.068-.574.21-.812m-5.96 0c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813s-.068.573-.21.811c-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.6 1.6 0 0 1-.21-.812c0-.286.068-.574.21-.812" clip-rule="evenodd"></svg:path>`,
})
export class SolarCatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatBoldDuotoneIcon],svg[solar-cat-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.606 5.563c.766 0 .914-.157 2.394-.157s1.628.157 2.394.157c.638 0 2.554-1.563 3.511-1.563s2.075.563 2.075 2.188v1.875c-.002.492-.18 2-.88 1.597c1.111 1.314.88 2.922.88 4.34c0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34c-.7.403-.878-1.105-.88-1.598V6.188C4.02 4.563 5.137 4 6.095 4c.957 0 2.873 1.563 3.511 1.563" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.016 11.063c-.489 0-.815.317-.98.583a1.8 1.8 0 0 0-.254.948c0 .332.082.67.254.947c.165.266.491.584.98.584c.49 0 .815-.318.98-.584c.172-.278.254-.615.254-.947c0-.333-.082-.67-.254-.948c-.165-.266-.49-.584-.98-.584m5.021.584c.164-.266.49-.584.98-.584c.488 0 .814.318.979.584c.172.278.254.615.254.948s-.082.67-.254.947c-.165.266-.49.584-.98.584c-.489 0-.815-.318-.98-.584a1.8 1.8 0 0 1-.254-.947c0-.333.082-.67.255-.948"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.178 14.08a2.4 2.4 0 0 1 .841-.143c.292 0 .59.045.842.143a1.3 1.3 0 0 1 .408.245c.134.123.307.35.307.675a.92.92 0 0 1-.307.675a1.3 1.3 0 0 1-.408.245c-.253.098-.55.143-.842.143c-.29 0-.588-.045-.84-.143a1.3 1.3 0 0 1-.41-.245a.92.92 0 0 1-.306-.675c0-.325.173-.552.307-.675a1.3 1.3 0 0 1 .408-.245" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.863 13.375a.75.75 0 0 1 .75-.75c.296 0 .65.067.981.149c.345.085.72.199 1.076.321c.684.234 1.41.532 1.737.744a.75.75 0 0 1-.813 1.26c-.157-.101-.722-.35-1.409-.585a12 12 0 0 0-.95-.284a3 3 0 0 0-.622-.105a.75.75 0 0 1-.75-.75m.105 1.75a.75.75 0 1 0 0 1.5c.206 0 .55.115.98.343c.342.18.656.385.901.545l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074a13 13 0 0 0-1.032-.623c-.457-.242-1.08-.517-1.681-.517m-14.153-.611c-.687.235-1.252.484-1.408.585a.75.75 0 0 1-.814-1.26c.328-.212 1.053-.51 1.737-.744c.357-.122.732-.237 1.077-.321c.33-.082.684-.149.98-.149a.75.75 0 0 1 0 1.5c-.107 0-.317.03-.622.105c-.29.072-.621.172-.95.284m.205 3.085l.131-.086c.246-.16.56-.365.901-.545c.431-.228.775-.343.98-.343a.75.75 0 0 0 0-1.5c-.6 0-1.224.275-1.68.517c-.41.216-.79.465-1.033.623l-.113.074a.75.75 0 0 0 .814 1.26"></svg:path>`,
})
export class SolarCatBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatBrokenIcon],svg[solar-cat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.98 9.063l.75.002v-.002zm-15.96 0h-.75v.002zM19.1 10.66l-.573.485l.084.1l.114.065zm-.272-1.265a.75.75 0 0 0-.888 1.21zM4.02 15h-.75zm2.04-4.395a.75.75 0 1 0-.888-1.21zM12 5.656c-.772 0-1.21.041-1.556.084c-.34.042-.512.072-.838.072v1.5c.44 0 .725-.047 1.02-.083c.29-.036.666-.073 1.374-.073zm0 1.5c.708 0 1.085.037 1.373.073c.296.036.58.083 1.021.083v-1.5c-.326 0-.498-.03-.838-.072A12 12 0 0 0 12 5.656zm2.394.157c.213 0 .412-.061.555-.114c.156-.058.317-.134.472-.214c.305-.157.659-.367.983-.554c.34-.195.66-.373.947-.503c.308-.14.484-.178.554-.178v-1.5c-.408 0-.83.157-1.171.31a13 13 0 0 0-1.078.571c-.354.204-.658.385-.922.52q-.194.1-.306.141c-.087.032-.087.02-.034.02zm3.511-1.563c.345 0 .675.103.907.303c.212.182.418.51.418 1.135h1.5c0-1-.352-1.766-.939-2.272c-.566-.487-1.272-.666-1.886-.666zm1.325 1.438v1.875h1.5V7.188zM9.606 5.813c.053 0 .053.011-.034-.02a3 3 0 0 1-.306-.141c-.264-.136-.568-.317-.922-.52c-.34-.196-.716-.408-1.078-.571c-.34-.154-.763-.311-1.171-.311v1.5c.07 0 .246.039.554.178c.287.13.608.308.947.503c.324.187.678.397.983.554c.155.08.316.156.472.214c.143.053.342.114.555.114zM6.095 4.25c-.614 0-1.32.179-1.886.666c-.587.505-.939 1.272-.939 2.271h1.5c0-.625.206-.952.418-1.134c.232-.2.563-.303.907-.303zM3.27 7.188v1.875h1.5V7.187zM12 20.75c1.431 0 3.54-.285 5.32-1.104c1.784-.82 3.41-2.273 3.41-4.646h-1.5c0 1.533-1.007 2.58-2.536 3.284s-3.412.966-4.694.966zm7.672-10.574a5 5 0 0 0-.844-.78l-.888 1.208q.358.267.587.54zM19.23 9.06c0 .198-.041.61-.138.895c-.055.159-.086.155-.03.11a.42.42 0 0 1 .412-.055l-.749 1.3c.18.104.402.18.65.167c.255-.013.466-.114.626-.242c.287-.23.432-.566.51-.796c.168-.491.218-1.08.22-1.374zM12 19.25c-1.282 0-3.163-.262-4.694-.966C5.776 17.58 4.77 16.533 4.77 15h-1.5c0 2.373 1.626 3.826 3.41 4.646c1.78.82 3.889 1.104 5.32 1.104zM4.77 15c0-.788-.057-1.437.019-2.128c.07-.645.253-1.218.684-1.727l-1.145-.97c-.68.805-.938 1.693-1.03 2.534c-.087.797-.028 1.66-.028 2.291zm.703-3.855a3.4 3.4 0 0 1 .587-.54l-.888-1.21q-.493.364-.844.78zM3.27 9.065c.001.294.051.883.219 1.374c.078.23.223.566.51.796c.16.128.371.229.625.242c.249.012.47-.063.651-.167l-.749-1.3a.42.42 0 0 1 .411.055c.057.045.026.049-.029-.11a3.3 3.3 0 0 1-.138-.895z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12.826 16c0 .173-.361.313-.806.313s-.807-.14-.807-.313s.361-.312.807-.312c.445 0 .806.14.806.312Zm2.674-2.406c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Zm-6 0c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094m1.774 3.594c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094m-1.774 3.594c.484-.313 1.613-1.094 2.42-1.094"></svg:path></svg:g>`,
})
export class SolarCatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatLineDuotoneIcon],svg[solar-cat-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19.1 10.66c1.111 1.314.88 2.922.88 4.34c0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563c-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5S4.02 5.563 4.02 7.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66"></svg:path><svg:path d="M12.826 16c0 .173-.361.313-.806.313s-.807-.14-.807-.313s.361-.312.807-.312c.445 0 .806.14.806.312Zm2.674-2.406c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Zm-6 0c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094m1.774 3.594c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094m-1.774 3.594c.484-.313 1.613-1.094 2.42-1.094" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCatLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatLinearIcon],svg[solar-cat-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19.1 10.66c1.111 1.314.88 2.922.88 4.34c0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563c-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5S4.02 5.563 4.02 7.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66"></svg:path><svg:path d="M12.826 16c0 .173-.361.313-.807.313c-.445 0-.806-.14-.806-.313s.361-.312.806-.312s.807.14.807.312Zm2.674-2.406c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Zm-6 0c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Z"></svg:path><svg:path stroke-linecap="round" d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094m1.774 3.594c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094m-1.774 3.594c.484-.313 1.613-1.094 2.42-1.094"></svg:path></svg:g>`,
})
export class SolarCatLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatOutlineIcon],svg[solar-cat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.02 14.937c-.292 0-.59.045-.842.143a1.3 1.3 0 0 0-.408.245a.92.92 0 0 0-.307.675c0 .325.173.552.307.674c.133.123.285.198.408.246c.253.098.55.142.842.142c.29 0 .588-.044.84-.142c.125-.048.276-.123.41-.246a.92.92 0 0 0 .306-.674a.92.92 0 0 0-.307-.675a1.3 1.3 0 0 0-.408-.245a2.4 2.4 0 0 0-.841-.143" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.037 12.646c.164-.266.49-.584.98-.584c.488 0 .814.318.979.584c.172.278.254.615.254.948s-.082.67-.254.947c-.165.266-.49.584-.98.584c-.489 0-.815-.318-.98-.584a1.8 1.8 0 0 1-.254-.947c0-.333.082-.67.255-.948m-5.021-.583c-.488 0-.814.317-.98.583a1.8 1.8 0 0 0-.254.948c0 .332.082.67.255.947c.165.266.49.584.98.584c.488 0 .814-.318.98-.584c.171-.278.253-.615.253-.947c0-.333-.082-.67-.254-.948c-.165-.266-.49-.584-.98-.584"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.095 4.25c-.614 0-1.32.179-1.886.666c-.587.505-.939 1.272-.939 2.271v1.878c.001.294.051.883.219 1.374c.055.161.142.374.289.567a4.9 4.9 0 0 0-.48 1.704c-.051.467-.052.958-.044 1.411c-.66.23-1.345.514-1.66.718a.75.75 0 0 0 .813 1.26c.116-.075.46-.233.912-.405c.069.479.208.915.403 1.312a21 21 0 0 0-.516.333a.75.75 0 1 0 .814 1.26l.131-.086c.131-.085.282-.184.446-.284c.59.602 1.322 1.067 2.082 1.417c1.781.82 3.89 1.104 5.321 1.104s3.54-.285 5.321-1.104c.76-.35 1.493-.815 2.082-1.417c.164.1.315.199.446.284l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074c-.11-.072-.247-.162-.403-.259c.195-.396.335-.833.404-1.312c.452.172.795.33.912.405a.75.75 0 0 0 .813-1.26c-.315-.204-1-.488-1.661-.718a11 11 0 0 0-.044-1.412a4.9 4.9 0 0 0-.48-1.703c.147-.193.234-.406.29-.567a4.8 4.8 0 0 0 .218-1.374V7.188c0-1-.352-1.766-.939-2.272c-.565-.487-1.272-.666-1.886-.666c-.408 0-.83.157-1.171.31a13 13 0 0 0-1.078.571l-.213.123l-.002.001c-.264.153-.498.29-.707.397q-.194.099-.306.14l-.062.02a5 5 0 0 1-.648-.052l-.162-.02A12 12 0 0 0 12 5.656c-.772 0-1.21.041-1.556.084l-.162.02a5 5 0 0 1-.648.052l-.062-.02a3 3 0 0 1-.306-.14a17 17 0 0 1-.707-.397l-.215-.124a13 13 0 0 0-1.077-.57c-.341-.154-.764-.311-1.172-.311m.067 13.364c.334.252.719.474 1.144.67c1.53.704 3.412.966 4.694.966s3.163-.262 4.694-.966c.425-.196.81-.418 1.144-.67a.75.75 0 0 1 .13-1.489c.327 0 .662.082.972.195a3 3 0 0 0 .283-1.093a3 3 0 0 0-.61-.102a.75.75 0 0 1 0-1.5c.195 0 .415.03.637.072c0-.276-.009-.547-.039-.825c-.07-.645-.253-1.218-.684-1.727a3.4 3.4 0 0 0-.587-.54a.75.75 0 1 1 .888-1.21q.18.132.338.27c.044-.228.064-.467.064-.604V7.188c0-.626-.206-.953-.418-1.135c-.232-.2-.562-.303-.907-.303c-.07 0-.246.039-.554.178c-.287.13-.608.308-.947.503l-.193.112c-.268.155-.545.316-.79.442c-.155.08-.316.156-.471.214a1.6 1.6 0 0 1-.556.114a6 6 0 0 1-.883-.067l-.137-.017A10 10 0 0 0 12 7.156c-.708 0-1.085.037-1.373.073l-.138.017c-.25.033-.511.066-.883.066c-.213 0-.412-.06-.555-.113a4 4 0 0 1-.472-.214c-.245-.126-.522-.287-.79-.442l-.193-.112c-.339-.195-.66-.374-.947-.503c-.308-.14-.484-.178-.554-.178c-.344 0-.675.103-.907.303c-.212.182-.418.51-.418 1.135V9.06c0 .137.02.376.064.604q.16-.138.338-.27a.75.75 0 0 1 .888 1.21q-.358.265-.587.54c-.43.51-.614 1.082-.684 1.727c-.03.278-.04.55-.04.825c.223-.043.443-.072.638-.072a.75.75 0 0 1 0 1.5c-.106 0-.312.03-.61.102c.027.398.125.761.283 1.093a2.9 2.9 0 0 1 .972-.195a.75.75 0 0 1 .13 1.489" clip-rule="evenodd"></svg:path>`,
})
export class SolarCatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2BoldIcon],svg[solar-chair-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.572 3.062c-.582.687-.702 1.692-.944 3.704l-.09.757c-.251 2.088-.376 3.132.22 3.804c.597.673 1.648.673 3.75.673h.742v1.75H7c-.321 0-.622.086-.88.237l-.28-.837a5 5 0 0 0-.205-.543a3 3 0 0 0-.198-.371c-.285-.469-.656-.876-1.258-1.14c-.566-.25-1.274-.346-2.179-.346a.75.75 0 0 0 0 1.5c.827 0 1.29.092 1.574.218c.249.11.41.265.581.547c.03.05.043.071.056.096c.013.024.031.058.063.127c.05.11.075.18.15.404l.864 2.595a.8.8 0 0 0 .147.256A2.75 2.75 0 0 0 8 18.25h3.25v1.166a3.63 3.63 0 0 0-2.462 2.347a.75.75 0 0 0 1.423.474a2.13 2.13 0 0 1 1.039-1.216V22a.75.75 0 0 0 1.5 0v-.98a2.13 2.13 0 0 1 1.039 1.217a.75.75 0 0 0 1.422-.474a3.63 3.63 0 0 0-2.461-2.347V18.25H16a2.75 2.75 0 0 0 2.565-1.757a.8.8 0 0 0 .146-.256l.866-2.595c.074-.224.098-.295.15-.404a2 2 0 0 1 .118-.223c.172-.282.332-.437.581-.547c.285-.126.747-.218 1.574-.218a.75.75 0 0 0 0-1.5c-.905 0-1.613.095-2.18.345c-.6.265-.972.672-1.257 1.14a3 3 0 0 0-.198.372a5 5 0 0 0-.206.543l-.279.837a1.74 1.74 0 0 0-.88-.237h-4.25V12h.741c2.103 0 3.154 0 3.75-.673c.598-.672.472-1.716.222-3.804l-.091-.757c-.241-2.012-.362-3.017-.944-3.704a3 3 0 0 0-.638-.566C15.04 2 14.026 2 12 2s-3.039 0-3.79.496a3 3 0 0 0-.638.566"></svg:path>`,
})
export class SolarChair2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2BoldDuotoneIcon],svg[solar-chair-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 15.5c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75A2.75 2.75 0 0 1 16 18.25H8a2.75 2.75 0 0 1-2.75-2.75m1.378-8.734c.242-2.012.362-3.017.944-3.704a3 3 0 0 1 .638-.566C8.96 2 9.974 2 12 2s3.039 0 3.79.496a3 3 0 0 1 .638.566c.582.687.703 1.692.944 3.704l.091.757c.25 2.088.376 3.132-.221 3.804c-.597.673-1.648.673-3.75.673h-2.983c-2.103 0-3.154 0-3.75-.673c-.597-.672-.472-1.716-.222-3.804z"></svg:path><svg:path fill="currentColor" d="M2 10.75a.75.75 0 0 0 0 1.5c.827 0 1.29.092 1.574.218c.249.11.41.265.581.547c.03.05.043.071.056.096c.013.024.031.058.063.127c.05.11.075.18.15.404l.864 2.595a.8.8 0 0 0 .147.256a2.7 2.7 0 0 1-.185-.993c0-.646.35-1.21.87-1.513l-.28-.837a5 5 0 0 0-.205-.543a3 3 0 0 0-.198-.371c-.285-.469-.656-.876-1.258-1.14c-.566-.25-1.274-.346-2.179-.346m10.75 3h-1.5V12h1.5zm5.815 2.743a2.7 2.7 0 0 0 .185-.993c0-.646-.35-1.21-.87-1.513l.28-.837a5 5 0 0 1 .205-.543c.086-.185.13-.258.198-.371c.285-.469.657-.876 1.258-1.14c.566-.25 1.274-.346 2.179-.346a.75.75 0 0 1 0 1.5c-.827 0-1.29.092-1.574.218c-.249.11-.41.265-.581.547c-.03.05-.043.071-.056.096a2 2 0 0 0-.063.127c-.05.11-.075.18-.15.404l-.864 2.595a.8.8 0 0 1-.147.256M11.25 18.25h1.5v1.166a3.63 3.63 0 0 1 2.461 2.347a.75.75 0 0 1-1.422.474a2.13 2.13 0 0 0-1.039-1.216V22a.75.75 0 0 1-1.5 0v-.98a2.13 2.13 0 0 0-1.039 1.217a.75.75 0 0 1-1.423-.474a3.63 3.63 0 0 1 2.462-2.347z" opacity=".5"></svg:path>`,
})
export class SolarChair2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2BrokenIcon],svg[solar-chair-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M15.79 2.496C15.04 2 14.026 2 12 2s-3.039 0-3.79.496a3 3 0 0 0-.638.566c-.582.687-.703 1.692-.944 3.704l-.09.757c-.251 2.088-.377 3.132.22 3.804c.597.673 1.648.673 3.75.673h2.983c2.103 0 3.154 0 3.75-.673c.598-.672.472-1.716.222-3.804l-.091-.757"></svg:path><svg:path d="M12 12v2"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 0v-2.5m0 2.5h.5c1 0 1.689 1.066 2 2M12 20h-.5c-1 0-1.689 1.066-2 2M6 15.5L5 13c-.5-1-1-1.5-3-1.5m16 4l1-2.5c.5-1 1-1.5 3-1.5"></svg:path></svg:g>`,
})
export class SolarChair2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2LineDuotoneIcon],svg[solar-chair-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm.628-8.734c.242-2.012.362-3.017.944-3.704a3 3 0 0 1 .638-.566C8.96 2 9.974 2 12 2s3.039 0 3.79.496a3 3 0 0 1 .638.566c.582.687.703 1.692.944 3.704l.091.757c.25 2.088.376 3.132-.221 3.804c-.597.673-1.648.673-3.75.673h-2.983c-2.103 0-3.154 0-3.75-.673c-.597-.672-.472-1.716-.222-3.804z"></svg:path><svg:path d="M12 12v2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 0v-2.5m0 2.5l.466.116A2.88 2.88 0 0 1 14.5 22M12 20l-.466.116A2.88 2.88 0 0 0 9.5 22M6 16l-.865-2.595c-.073-.22-.11-.33-.18-.482a2.4 2.4 0 0 0-.16-.297C4.34 11.876 3.734 11.5 2 11.5M18 16l.865-2.595c.073-.22.11-.33.18-.482c.072-.153.1-.201.16-.297c.456-.75 1.063-1.126 2.795-1.126" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChair2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2LinearIcon],svg[solar-chair-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm.628-8.734c.242-2.012.362-3.017.944-3.704a3 3 0 0 1 .638-.566C8.96 2 9.974 2 12 2s3.039 0 3.79.496a3 3 0 0 1 .638.566c.582.687.703 1.692.944 3.704l.091.757c.25 2.088.376 3.132-.221 3.804c-.597.673-1.648.673-3.75.673h-2.983c-2.103 0-3.154 0-3.75-.673c-.597-.672-.472-1.716-.222-3.804zM12 12v2"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 0v-2.5m0 2.5l.466.116A2.88 2.88 0 0 1 14.5 22M12 20l-.466.116A2.88 2.88 0 0 0 9.5 22M6 16l-.865-2.595c-.073-.22-.11-.33-.18-.482a2.4 2.4 0 0 0-.16-.297C4.34 11.876 3.734 11.5 2 11.5M18 16l.865-2.595c.073-.22.11-.33.18-.482c.072-.153.1-.201.16-.297c.456-.75 1.063-1.126 2.795-1.126"></svg:path></svg:g>`,
})
export class SolarChair2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2OutlineIcon],svg[solar-chair-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.96 1.25h.08c.979 0 1.771 0 2.41.066c.662.068 1.237.213 1.753.554c.298.196.567.434.798.707c.399.472.611 1.025.758 1.675c.142.626.236 1.413.353 2.384l.102.853c.12.997.219 1.823.206 2.482c-.014.692-.151 1.329-.617 1.854s-1.082.738-1.768.834c-.652.091-1.484.091-2.488.091h-.797v1H17c.321 0 .622.086.88.237l.28-.837a5 5 0 0 1 .205-.543c.086-.185.13-.258.198-.371c.285-.469.657-.876 1.258-1.14c.566-.25 1.274-.346 2.179-.346a.75.75 0 0 1 0 1.5c-.827 0-1.29.092-1.574.218c-.249.11-.41.265-.581.547c-.03.05-.043.071-.056.096a2 2 0 0 0-.063.127c-.05.11-.075.18-.15.404l-.864 2.595a.8.8 0 0 1-.147.256A2.75 2.75 0 0 1 16 18.25h-3.25v1.166a3.63 3.63 0 0 1 2.461 2.347a.75.75 0 0 1-1.422.474a2.13 2.13 0 0 0-1.039-1.216V22a.75.75 0 0 1-1.5 0v-.98a2.13 2.13 0 0 0-1.039 1.217a.75.75 0 0 1-1.423-.474a3.63 3.63 0 0 1 2.462-2.347V18.25H8a2.75 2.75 0 0 1-2.565-1.757a.8.8 0 0 1-.147-.256l-.865-2.595a3 3 0 0 0-.15-.404a2 2 0 0 0-.118-.223c-.171-.282-.332-.437-.581-.547c-.285-.126-.747-.218-1.574-.218a.75.75 0 0 1 0-1.5c.905 0 1.613.095 2.18.345c.6.265.972.672 1.257 1.14c.068.114.112.187.198.372c.088.192.137.337.206.543l.279.837c.258-.15.559-.237.88-.237h4.25v-1h-.797c-1.004 0-1.836 0-2.488-.091c-.686-.096-1.302-.309-1.768-.834s-.603-1.162-.617-1.854c-.013-.659.086-1.485.206-2.482l.102-.853c.117-.971.211-1.758.353-2.384c.147-.65.359-1.203.758-1.675c.231-.273.5-.51.798-.707c.516-.34 1.09-.486 1.753-.554c.639-.066 1.431-.066 2.41-.066M16 16.75c.69 0 1.25-.56 1.25-1.25a.25.25 0 0 0-.25-.25H7a.25.25 0 0 0-.25.25c0 .69.56 1.25 1.25 1.25zM9.704 2.808c-.539.056-.846.158-1.081.314a2.3 2.3 0 0 0-.479.424c-.182.216-.32.508-.44 1.036c-.123.543-.209 1.252-.331 2.273l-.091.758C7.154 8.679 7.069 9.4 7.08 9.94c.01.52.109.741.24.889c.13.147.338.271.853.343c.536.075 1.262.077 2.336.077h2.982c1.074 0 1.8-.002 2.336-.077c.515-.072.723-.196.854-.343c.13-.148.229-.37.24-.889c.01-.541-.075-1.262-.203-2.328l-.09-.758c-.123-1.021-.21-1.73-.332-2.273c-.12-.528-.258-.82-.44-1.036a2.3 2.3 0 0 0-.479-.424c-.235-.156-.542-.258-1.081-.314c-.553-.057-1.267-.058-2.296-.058s-1.743 0-2.296.058" clip-rule="evenodd"></svg:path>`,
})
export class SolarChair2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairBoldIcon],svg[solar-chair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.402 4.5C7 5.196 7 6.13 7 8v3.027C7.43 11 7.914 11 8.435 11h7.13c.52 0 1.005 0 1.435.027V8c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 15.5 3.402C14.804 3 13.87 3 12 3s-2.804 0-3.5.402A3 3 0 0 0 7.402 4.5M6.25 15.991c-.502-.02-.806-.088-1.014-.315c-.297-.324-.258-.774-.18-1.675c.055-.65.181-1.088.467-1.415C6.035 12 6.858 12 8.505 12h6.99c1.647 0 2.47 0 2.982.586c.286.326.412.764.468 1.415c.077.9.116 1.351-.181 1.675c-.208.227-.512.295-1.014.315V21a.75.75 0 1 1-1.5 0v-5h-8.5v5a.75.75 0 1 1-1.5 0z"></svg:path>`,
})
export class SolarChairBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairBoldDuotoneIcon],svg[solar-chair-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.402 4.5C7 5.196 7 6.13 7 8v4.027C7.43 12 7.914 12 8.435 12h7.13c.52 0 1.005 0 1.435.027V8c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 15.5 3.402C14.804 3 13.87 3 12 3s-2.804 0-3.5.402A3 3 0 0 0 7.402 4.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.25 15.991c-.502-.02-.806-.088-1.014-.315c-.297-.324-.258-.774-.18-1.675c.055-.65.181-1.088.467-1.415C6.035 12 6.858 12 8.505 12h6.99c1.647 0 2.47 0 2.982.586c.286.326.412.764.468 1.415c.077.9.116 1.351-.181 1.675c-.208.227-.512.295-1.014.315V21a.75.75 0 1 1-1.5 0v-5h-8.5v5a.75.75 0 1 1-1.5 0z"></svg:path>`,
})
export class SolarChairBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairBrokenIcon],svg[solar-chair-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 21v-5M7 21v-5m5 0H7c-.985 0-1.477 0-1.775-.324s-.258-.774-.18-1.675c.055-.65.182-1.088.468-1.415C6.025 12 6.85 12 8.5 12h7c1.65 0 2.475 0 2.987.586c.286.326.413.764.469 1.415c.077.9.116 1.351-.181 1.675C18.477 16 17.985 16 17 16h-1"></svg:path><svg:path d="M7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7z"></svg:path></svg:g>`,
})
export class SolarChairBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairLineDuotoneIcon],svg[solar-chair-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 21v-5M7 21v-5" opacity=".5"></svg:path><svg:path d="M15.5 12h-7c-1.65 0-2.475 0-2.987.586c-.286.326-.413.764-.469 1.415c-.077.9-.116 1.351.181 1.675C5.523 16 6.015 16 7 16h10c.985 0 1.477 0 1.775-.324s.258-.774.18-1.675c-.055-.65-.182-1.088-.468-1.415C17.975 12 17.15 12 15.5 12Z"></svg:path><svg:path d="M7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChairLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairLinearIcon],svg[solar-chair-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 21v-5M7 21v-5"></svg:path><svg:path d="M15.5 12h-7c-1.65 0-2.475 0-2.988.586c-.286.326-.412.764-.468 1.415c-.077.9-.116 1.351.181 1.675S6.015 16 7 16h10c.985 0 1.477 0 1.774-.324c.298-.324.259-.774.181-1.675c-.055-.65-.182-1.088-.468-1.415C17.975 12 17.15 12 15.5 12ZM7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7z"></svg:path></svg:g>`,
})
export class SolarChairLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairOutlineIcon],svg[solar-chair-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.964 2.25h.072c.904 0 1.633 0 2.222.053c.606.055 1.136.172 1.617.45a3.75 3.75 0 0 1 1.373 1.372c.278.481.394 1.011.449 1.617c.053.589.053 1.318.053 2.222v3.407c.494.104.941.309 1.302.72c.445.51.59 1.146.651 1.846l.004.047c.035.41.069.797.047 1.121c-.025.371-.126.75-.427 1.078c-.31.34-.702.465-1.076.519q-.229.032-.5.04V21a.75.75 0 0 1-1.5 0v-4.25h-8.5V21a.75.75 0 0 1-1.5 0v-4.258a5 5 0 0 1-.502-.04c-.374-.054-.765-.18-1.076-.519c-.301-.328-.402-.707-.427-1.078c-.022-.324.012-.712.047-1.12l.004-.048c.06-.7.206-1.336.651-1.845c.361-.412.808-.617 1.302-.721V7.964c0-.904 0-1.633.053-2.222c.055-.606.172-1.136.45-1.617a3.75 3.75 0 0 1 1.372-1.373c.481-.277 1.011-.394 1.617-.449c.589-.053 1.318-.053 2.222-.053m-3.52 9H7.75V8c0-.948 0-1.61.047-2.122c.046-.503.13-.788.255-1.003a2.25 2.25 0 0 1 .823-.824c.215-.124.5-.208 1.003-.254c.512-.046 1.174-.047 2.122-.047s1.61 0 2.122.047c.503.046.788.13 1.003.254c.342.198.626.482.824.824c.124.215.208.5.254 1.003c.046.512.047 1.174.047 2.122v3.25zm.056 1.5c-.849 0-1.4.002-1.806.065c-.374.057-.517.15-.617.265c-.126.144-.234.384-.285.985c-.041.474-.062.745-.05.94a.6.6 0 0 0 .024.144c.004.01.006.013.012.02l.001.001l.003.002l.01.005c.02.01.07.026.169.04c.218.031.524.033 1.04.033h10c.514 0 .82-.002 1.038-.033a.7.7 0 0 0 .179-.045l.003-.001l.001-.002l.012-.02a.6.6 0 0 0 .023-.144c.013-.195-.008-.466-.049-.94c-.051-.6-.159-.841-.285-.985c-.1-.114-.243-.208-.617-.265c-.406-.063-.957-.065-1.806-.065z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChairOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierBoldIcon],svg[solar-chandelier-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 1 0 5.5 0v-.594A3 3 0 0 1 16 13v-1.8a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 0 1-2.25 2.906v.594A4.25 4.25 0 0 1 12 18.912A4.25 4.25 0 0 1 4.25 16.5v-.594A3 3 0 0 1 2 13v-2.143c0-.473.384-.857.857-.857h4.286c.473 0 .857.384.857.857V13a3 3 0 0 1-2.25 2.906v.594a2.75 2.75 0 1 0 5.5 0V4.75H9A.75.75 0 0 1 8.25 4"></svg:path>`,
})
export class SolarChandelierBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierBoldDuotoneIcon],svg[solar-chandelier-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 4.75V16.5a2.75 2.75 0 1 1-5.5 0v-.594h-1.5v.594A4.25 4.25 0 0 0 12 18.912a4.25 4.25 0 0 0 7.75-2.412v-.594h-1.5v.594a2.75 2.75 0 1 1-5.5 0V4.75z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 3.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM16 13c0 1.398.956 2.573 2.25 2.906h1.5A3 3 0 0 0 22 13v-1.8a1.2 1.2 0 0 0-1.2-1.2h-3.6a1.2 1.2 0 0 0-1.2 1.2zM2 13c0 1.398.956 2.573 2.25 2.906h1.5A3 3 0 0 0 8 13v-2.143A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857z"></svg:path>`,
})
export class SolarChandelierBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierBrokenIcon],svg[solar-chandelier-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 4h6m5.8 6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0v-1.8a1.2 1.2 0 0 1 1.2-1.2M12 4v3m0 9.5a3.5 3.5 0 1 0 7 0v-.056m-7 .056a3.5 3.5 0 1 1-7 0v-.056m7 .056V11"></svg:path><svg:path d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0z"></svg:path></svg:g>`,
})
export class SolarChandelierBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierLineDuotoneIcon],svg[solar-chandelier-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 4h6"></svg:path><svg:path d="M16 11.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M12 4v12.5m0 0a3.5 3.5 0 1 0 7 0v-.056m-7 .056a3.5 3.5 0 1 1-7 0v-.056" opacity=".5"></svg:path><svg:path d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0z"></svg:path></svg:g>`,
})
export class SolarChandelierLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierLinearIcon],svg[solar-chandelier-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 4h6m-3 0v12.5a3.5 3.5 0 1 0 7 0v-.056"></svg:path><svg:path d="M16 11.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M12 4v12.5a3.5 3.5 0 1 1-7 0v-.056"></svg:path><svg:path d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0z"></svg:path></svg:g>`,
})
export class SolarChandelierLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierOutlineIcon],svg[solar-chandelier-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 0 0 5.495.174A3.75 3.75 0 0 1 15.25 13v-1.8a1.95 1.95 0 0 1 1.95-1.95h3.6a1.95 1.95 0 0 1 1.95 1.95V13c0 1.816-1.29 3.33-3.004 3.676A4.25 4.25 0 0 1 12 18.912a4.25 4.25 0 0 1-7.746-2.236A3.75 3.75 0 0 1 1.25 13v-2.143c0-.887.72-1.607 1.607-1.607h4.286c.887 0 1.607.72 1.607 1.607V13a3.75 3.75 0 0 1-2.995 3.674a2.75 2.75 0 0 0 5.495-.174V4.75H9A.75.75 0 0 1 8.25 4m-5.393 6.75a.107.107 0 0 0-.107.107V13a2.25 2.25 0 0 0 4.5 0v-2.143a.107.107 0 0 0-.107-.107zm14.343 0a.45.45 0 0 0-.45.45V13a2.25 2.25 0 0 0 4.5 0v-1.8a.45.45 0 0 0-.45-.45z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChandelierOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2BoldIcon],svg[solar-chart-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zM3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarChart2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2BoldDuotoneIcon],svg[solar-chart-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293"></svg:path><svg:path fill="currentColor" d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293" opacity=".4"></svg:path><svg:path fill="currentColor" d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarChart2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2BrokenIcon],svg[solar-chart-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22h18"></svg:path><svg:path stroke-linecap="round" d="M3 17c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293S3 10.057 3 11v2"></svg:path><svg:path d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z"></svg:path><svg:path stroke-linecap="round" d="M21 11v6c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17V4c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v3"></svg:path></svg:g>`,
})
export class SolarChart2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2LineDuotoneIcon],svg[solar-chart-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22h18" opacity=".5"></svg:path><svg:path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z"></svg:path></svg:g>`,
})
export class SolarChart2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2LinearIcon],svg[solar-chart-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22h18"></svg:path><svg:path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z"></svg:path></svg:g>`,
})
export class SolarChart2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2OutlineIcon],svg[solar-chart-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.955 1.25c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v13.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152V3.955c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47c-.323-.043-.72-.043-1.152-.043zm-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v13c0 .493.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.003.002l.007.003c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997V4c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042M11.955 4.25h.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v10.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.432 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152V6.955c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.132 1.573l.003-.001l-.003 12.355l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997V7c0-.493.002-.787.03-.997a.7.7 0 0 1 .042-.177zm0 12.354l.003-12.355l.003-.002l.007-.003a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03s.787.002.997.03a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997v10c0 .493-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03s-.787-.002-.997-.03a.7.7 0 0 1-.177-.042zM4.955 8.25c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v6.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-6.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47c-.323-.043-.72-.043-1.152-.043zm-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v6c0 .493.002.787.03.997a.7.7 0 0 0 .042.177v.002l.004.002l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.002-.004l.003-.006a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997v-6c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarChart2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartBoldIcon],svg[solar-chart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z"></svg:path>`,
})
export class SolarChartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartBoldDuotoneIcon],svg[solar-chart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 20.5V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H8zm12 5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H20z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M1.75 20.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path>`,
})
export class SolarChartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartBrokenIcon],svg[solar-chart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 22V9M9 22V5c0-1.414 0-2.121.44-2.56C9.878 2 10.585 2 12 2s2.121 0 2.56.44C15 2.878 15 3.585 15 5v0"></svg:path><svg:path stroke-linecap="round" d="M9 22V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V16m0 6v-2.25"></svg:path></svg:g>`,
})
export class SolarChartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartLineDuotoneIcon],svg[solar-chart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22" opacity=".5"></svg:path><svg:path d="M15 22V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2s-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17"></svg:path><svg:path d="M9 22V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartLinearIcon],svg[solar-chart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22m0 0V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2s-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17m0 0V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V22"></svg:path></svg:g>`,
})
export class SolarChartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartOutlineIcon],svg[solar-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.3 2.3 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3q-.396.002-.75.128V4.951c0-.665 0-1.238-.062-1.697c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062m8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75zm-6 0V5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v16.25zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareBoldIcon],svg[solar-chart-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 12.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0zM7 8.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarChartSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareBoldDuotoneIcon],svg[solar-chart-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-5 3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarChartSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareBrokenIcon],svg[solar-chart-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 18V9m5 9V6m5 12v-5m5-1c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarChartSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareLineDuotoneIcon],svg[solar-chart-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 18V9m5 9V6m5 12v-5"></svg:path></svg:g>`,
})
export class SolarChartSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareLinearIcon],svg[solar-chart-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 18V9m5 9V6m5 12v-5"></svg:path></svg:g>`,
})
export class SolarChartSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareOutlineIcon],svg[solar-chart-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zM12 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M17.75 13a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarChartSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsBoldIcon],svg[solar-chat-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M16 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatDotsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsBoldDuotoneIcon],svg[solar-chat-dots-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarChatDotsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsBrokenIcon],svg[solar-chat-dots-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11h.009m3.982 0H12m3.991 0H16"></svg:path></svg:g>`,
})
export class SolarChatDotsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsLineDuotoneIcon],svg[solar-chat-dots-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11h.009m3.982 0H12m3.991 0H16" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatDotsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsLinearIcon],svg[solar-chat-dots-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11h.009m3.982 0H12m3.991 0H16"></svg:path></svg:g>`,
})
export class SolarChatDotsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsOutlineIcon],svg[solar-chat-dots-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarChatDotsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineBoldIcon],svg[solar-chat-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262M8 11.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineBoldDuotoneIcon],svg[solar-chat-line-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarChatLineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineBrokenIcon],svg[solar-chat-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 9h8m-8 3.5h5.5"></svg:path><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path></svg:g>`,
})
export class SolarChatLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineLineDuotoneIcon],svg[solar-chat-line-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 9h8m-8 3.5h5.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatLineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineLinearIcon],svg[solar-chat-line-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 9h8m-8 3.5h5.5"></svg:path></svg:g>`,
})
export class SolarChatLineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineOutlineIcon],svg[solar-chat-line-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089M7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatLineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundBoldIcon],svg[solar-chat-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"></svg:path>`,
})
export class SolarChatRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundBoldDuotoneIcon],svg[solar-chat-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.456 3.09A10 10 0 0 0 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.764.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.134A9.96 9.96 0 0 0 12 22c4.885 0 8.952-3.503 9.826-8.134A9 9 0 0 1 7.456 3.09"></svg:path><svg:path fill="currentColor" d="M21.826 13.866q.172-.909.174-1.866c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-4.544 1.09a9 9 0 0 0 14.37 10.776" opacity=".5"></svg:path>`,
})
export class SolarChatRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundBrokenIcon],svg[solar-chat-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path>`,
})
export class SolarChatRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallBoldIcon],svg[solar-chat-round-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10M12 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M8.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM16 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallBoldDuotoneIcon],svg[solar-chat-round-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.775a.825.825 0 0 0-.825.825v8.8a.825.825 0 0 0 1.65 0V7.6A.825.825 0 0 0 12 6.775m-4.4 2.2a.825.825 0 0 0-.825.825v4.4a.825.825 0 0 0 1.65 0V9.8a.825.825 0 0 0-.825-.825" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.575 9.8a.825.825 0 0 1 1.65 0v4.4a.825.825 0 0 1-1.65 0z"></svg:path>`,
})
export class SolarChatRoundCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallBrokenIcon],svg[solar-chat-round-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16V8m-4 6v-4m8 4v-4m1-6.662A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path>`,
})
export class SolarChatRoundCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallLineDuotoneIcon],svg[solar-chat-round-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M12 16V8m-4 6v-4m8 4v-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallLinearIcon],svg[solar-chat-round-call-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M12 16V8m-4 6v-4m8 4v-4"></svg:path></svg:g>`,
})
export class SolarChatRoundCallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallOutlineIcon],svg[solar-chat-round-call-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12M12 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-4 2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 8 9.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundCallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckBoldIcon],svg[solar-chat-round-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-6.47-2.53a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411l3.48-3.48a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckBoldDuotoneIcon],svg[solar-chat-round-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.53 9.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411l3.48-3.48a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarChatRoundCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckBrokenIcon],svg[solar-chat-round-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9 12.08L11 14l4-4"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckLineDuotoneIcon],svg[solar-chat-round-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 12.08L11 14l4-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckLinearIcon],svg[solar-chat-round-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 12.08L11 14l4-4"></svg:path></svg:g>`,
})
export class SolarChatRoundCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckOutlineIcon],svg[solar-chat-round-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12m14.28-2.53a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411l3.48-3.48a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsBoldIcon],svg[solar-chat-round-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarChatRoundDotsBold0"><svg:g fill="none"><svg:path fill="#fff" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"></svg:path><svg:path fill="#000" d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarChatRoundDotsBold0)"></svg:path>`,
})
export class SolarChatRoundDotsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsBoldDuotoneIcon],svg[solar-chat-round-dots-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12c0 1.76.413 3.423 1.148 4.898c.195.392.26.84.147 1.263l-.655 2.448a1.43 1.43 0 0 0 1.75 1.751l2.45-.655a1.8 1.8 0 0 1 1.262.147A10.96 10.96 0 0 0 12 23" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.9 12a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0m-4.4 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0m8.8 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0"></svg:path>`,
})
export class SolarChatRoundDotsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsBrokenIcon],svg[solar-chat-round-dots-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.982 0H12m3.991 0H16"></svg:path></svg:g>`,
})
export class SolarChatRoundDotsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsLineDuotoneIcon],svg[solar-chat-round-dots-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.982 0H12m3.991 0H16" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundDotsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsLinearIcon],svg[solar-chat-round-dots-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.982 0H12m3.991 0H16"></svg:path><svg:path stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path></svg:g>`,
})
export class SolarChatRoundDotsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsOutlineIcon],svg[solar-chat-round-dots-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12c0 1.718.404 3.345 1.122 4.787c.107.215.13.435.08.62l-.595 2.226c-.408 1.524.986 2.918 2.51 2.51l2.226-.596a.9.9 0 0 1 .62.08A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75M12 2.75a9.25 9.25 0 0 1 0 18.5a9.2 9.2 0 0 1-4.118-.965a2.38 2.38 0 0 0-1.676-.187l-2.227.596a.55.55 0 0 1-.673-.674l.596-2.226a2.38 2.38 0 0 0-.187-1.676A9.2 9.2 0 0 1 2.75 12A9.25 9.25 0 0 1 12 2.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundDotsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeBoldIcon],svg[solar-chat-round-like-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-14.5-.892c0 1.369 1.319 2.805 2.529 3.834c.823.7 1.235 1.051 1.971 1.051s1.148-.35 1.971-1.051c1.21-1.03 2.529-2.465 2.529-3.834c0-2.677-2.475-3.676-4.5-1.608c-2.025-2.068-4.5-1.069-4.5 1.608" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundLikeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeBoldDuotoneIcon],svg[solar-chat-round-like-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.5 11.11c0 1.368 1.319 2.804 2.529 3.833c.823.7 1.235 1.05 1.971 1.05s1.148-.35 1.971-1.05c1.21-1.03 2.529-2.465 2.529-3.834c0-2.677-2.475-3.676-4.5-1.608c-2.025-2.068-4.5-1.069-4.5 1.608"></svg:path>`,
})
export class SolarChatRoundLikeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeBrokenIcon],svg[solar-chat-round-like-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.029 14.943l-.486.57zM12 9.5l-.536.524a.75.75 0 0 0 1.072 0zm1.971 5.442l-.486-.572zM12 15.993v-.75zm-1.485-1.622c-.582-.494-1.166-1.068-1.599-1.66c-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486c.529.725 1.21 1.384 1.838 1.919zM8.25 11.11c0-1.107.495-1.69 1.003-1.881c.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153c-1.235.462-1.978 1.717-1.978 3.286zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918c.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602c-.433.593-1.017 1.166-1.598 1.66zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286c-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798c.51.19 1.004.774 1.004 1.881zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.485-.873zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundLikeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeLineDuotoneIcon],svg[solar-chat-round-like-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path fill="currentColor" d="m10.029 14.943l-.486.57zM12 9.5l-.536.524a.75.75 0 0 0 1.072 0zm1.971 5.442l-.486-.572zM12 15.993v-.75zm-1.485-1.622c-.582-.494-1.166-1.068-1.599-1.66c-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486c.529.725 1.21 1.384 1.838 1.919zM8.25 11.11c0-1.107.495-1.69 1.003-1.881c.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153c-1.235.462-1.978 1.717-1.978 3.286zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918c.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602c-.433.593-1.017 1.166-1.598 1.66zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286c-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798c.51.19 1.004.774 1.004 1.881zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.485-.873zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundLikeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeLinearIcon],svg[solar-chat-round-like-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path fill="currentColor" d="m10.029 14.943l-.486.57zM12 9.5l-.536.524a.75.75 0 0 0 1.072 0zm1.971 5.442l-.486-.572zM12 15.993v-.75zm-1.485-1.622c-.582-.494-1.166-1.068-1.599-1.66c-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486c.529.725 1.21 1.384 1.838 1.919zM8.25 11.11c0-1.107.495-1.69 1.003-1.881c.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153c-1.235.462-1.978 1.717-1.978 3.286zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918c.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602c-.433.593-1.017 1.166-1.598 1.66zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286c-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798c.51.19 1.004.774 1.004 1.881zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.485-.873zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23z"></svg:path></svg:g>`,
})
export class SolarChatRoundLikeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeOutlineIcon],svg[solar-chat-round-like-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12m14.022-4.178c1.235.462 1.978 1.717 1.978 3.286c0 .916-.435 1.774-.955 2.487c-.529.724-1.21 1.384-1.838 1.918l-.093.08c-.737.628-1.35 1.15-2.364 1.15c-1.015 0-1.627-.522-2.364-1.15l-.093-.08c-.629-.534-1.309-1.194-1.838-1.918c-.52-.713-.955-1.57-.955-2.487c0-1.569.743-2.824 1.978-3.286c1.043-.39 2.23-.137 3.272.674c1.043-.81 2.23-1.064 3.272-.674m-.525 1.405c-.518-.193-1.342-.09-2.211.797a.75.75 0 0 1-1.072 0c-.869-.887-1.693-.99-2.21-.797c-.51.19-1.004.774-1.004 1.881c0 .453.225.997.666 1.602c.433.593 1.017 1.166 1.598 1.66c.869.74 1.072.873 1.486.873s.617-.134 1.486-.873c.581-.494 1.165-1.067 1.598-1.66c.441-.605.666-1.149.666-1.602c0-1.107-.495-1.69-1.003-1.88" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundLikeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineBoldIcon],svg[solar-chat-round-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22m-4-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-.75-2.75A.75.75 0 0 1 8 9.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineBoldDuotoneIcon],svg[solar-chat-round-line-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.825 12.85a.825.825 0 0 0 0 1.65h6.05a.825.825 0 0 0 0-1.65zm0-3.85a.825.825 0 0 0 0 1.65h8.8a.825.825 0 0 0 0-1.65z"></svg:path>`,
})
export class SolarChatRoundLineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineBrokenIcon],svg[solar-chat-round-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10.5h8M8 14h5.5M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path>`,
})
export class SolarChatRoundLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineDuotoneIcon],svg[solar-chat-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path>`,
})
export class SolarChatRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineLineDuotoneIcon],svg[solar-chat-round-line-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M8 10.5h8M8 14h5.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundLineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineLinearIcon],svg[solar-chat-round-line-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M8 10.5h8M8 14h5.5"></svg:path></svg:g>`,
})
export class SolarChatRoundLineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineOutlineIcon],svg[solar-chat-round-line-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12m6-1.5A.75.75 0 0 1 8 9.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundLineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLinearIcon],svg[solar-chat-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path>`,
})
export class SolarChatRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyBoldIcon],svg[solar-chat-round-money-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10M12 7.25a.75.75 0 0 1 .75.75v.01c1.089.275 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.049-2 2.323V16a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.048 2-2.323V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundMoneyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyBoldDuotoneIcon],svg[solar-chat-round-money-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 8a.75.75 0 0 0-1.5 0v.01c-1.089.275-2 1.133-2 2.323c0 1.457 1.365 2.417 2.75 2.417c.824 0 1.25.533 1.25.917s-.426.916-1.25.916s-1.25-.532-1.25-.916a.75.75 0 0 0-1.5 0c0 1.19.911 2.049 2 2.323V16a.75.75 0 0 0 1.5 0v-.01c1.089-.274 2-1.133 2-2.323c0-1.457-1.365-2.417-2.75-2.417c-.824 0-1.25-.533-1.25-.917s.426-.916 1.25-.916s1.25.532 1.25.916a.75.75 0 0 0 1.5 0c0-1.19-.911-2.048-2-2.323z"></svg:path>`,
})
export class SolarChatRoundMoneyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyBrokenIcon],svg[solar-chat-round-money-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 15.333c1.105 0 2-.746 2-1.666S13.105 12 12 12s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundMoneyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyLineDuotoneIcon],svg[solar-chat-round-money-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M12 15.333c1.105 0 2-.746 2-1.666S13.105 12 12 12s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundMoneyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyLinearIcon],svg[solar-chat-round-money-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M12 15.333c1.105 0 2-.746 2-1.666S13.105 12 12 12s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></svg:path></svg:g>`,
})
export class SolarChatRoundMoneyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyOutlineIcon],svg[solar-chat-round-money-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12M12 7.25a.75.75 0 0 1 .75.75v.01c1.089.275 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.049-2 2.323V16a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.048 2-2.323V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundMoneyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundOutlineIcon],svg[solar-chat-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12c0 1.718.404 3.345 1.122 4.787c.107.215.13.435.08.62l-.595 2.226c-.408 1.524.986 2.918 2.51 2.51l2.226-.596a.9.9 0 0 1 .62.08A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75M12 2.75a9.25 9.25 0 0 1 0 18.5a9.2 9.2 0 0 1-4.118-.965a2.38 2.38 0 0 0-1.676-.187l-2.227.596a.55.55 0 0 1-.673-.674l.596-2.226a2.38 2.38 0 0 0-.187-1.676A9.2 9.2 0 0 1 2.75 12A9.25 9.25 0 0 1 12 2.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadBoldIcon],svg[solar-chat-round-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.906-.12-1.784-.346-2.618c-.086-.316-.455-.441-.751-.303a4.5 4.5 0 0 1-5.982-5.982c.138-.296.013-.665-.303-.75A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"></svg:path><svg:circle cx="19" cy="5" r="3" fill="currentColor"></svg:circle>`,
})
export class SolarChatRoundUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadBoldDuotoneIcon],svg[solar-chat-round-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M15.235 2.535A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.132-.188-2.22-.535-3.235a4.5 4.5 0 0 1-6.23-6.23" opacity=".5"></svg:path>`,
})
export class SolarChatRoundUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadBrokenIcon],svg[solar-chat-round-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)"></svg:circle><svg:path stroke-linecap="round" d="M14 2.2a10.05 10.05 0 0 0-7 1.138M21.8 10q.198.97.2 2c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadLineDuotoneIcon],svg[solar-chat-round-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)"></svg:circle><svg:path stroke-linecap="round" d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q-.002-1.03-.2-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadLinearIcon],svg[solar-chat-round-unread-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)"></svg:circle><svg:path stroke-linecap="round" d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q-.002-1.03-.2-2"></svg:path></svg:g>`,
})
export class SolarChatRoundUnreadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadOutlineIcon],svg[solar-chat-round-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 9.065-11.1a.75.75 0 1 1 1.47-.3q.213 1.046.215 2.15c0 5.937-4.813 10.75-10.75 10.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25q1.104.002 2.15.215a.75.75 0 0 1-.3 1.47A9.3 9.3 0 0 0 12 2.75M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M19 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoBoldIcon],svg[solar-chat-round-video-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-6 0c0-.844-.927-1.414-2.78-2.553c-1.88-1.155-2.82-1.732-3.52-1.308S9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundVideoBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoBoldDuotoneIcon],svg[solar-chat-round-video-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.22 9.447C15.073 10.586 16 11.156 16 12c0 .845-.927 1.414-2.78 2.553c-1.88 1.155-2.819 1.732-3.52 1.308C9 15.437 9 14.291 9 12s0-3.437.7-3.861c.701-.424 1.64.153 3.52 1.308"></svg:path>`,
})
export class SolarChatRoundVideoBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoBrokenIcon],svg[solar-chat-round-video-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16 12c0-.844-.927-1.414-2.78-2.553c-1.88-1.155-2.82-1.732-3.52-1.308S9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12Z"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundVideoBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoLineDuotoneIcon],svg[solar-chat-round-video-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M16 12c0-.844-.927-1.414-2.78-2.553c-1.88-1.155-2.82-1.732-3.52-1.308S9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatRoundVideoLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoLinearIcon],svg[solar-chat-round-video-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></svg:path><svg:path stroke-linecap="round" d="M16 12c0-.844-.927-1.414-2.78-2.553c-1.88-1.155-2.82-1.732-3.52-1.308S9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12Z"></svg:path></svg:g>`,
})
export class SolarChatRoundVideoLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoOutlineIcon],svg[solar-chat-round-video-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118c.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12m12.307-3.226l.108.066c.882.542 1.617.994 2.123 1.42c.527.444.962.988.962 1.74s-.435 1.296-.962 1.74c-.507.426-1.241.878-2.123 1.42l-.108.066c-.892.548-1.637 1.006-2.247 1.264c-.627.265-1.333.415-1.998.013c-.65-.393-.871-1.081-.967-1.768c-.095-.678-.095-1.58-.095-2.675v-.12c0-1.095 0-1.997.095-2.675c.096-.687.318-1.375.967-1.768c.665-.402 1.37-.252 1.998.013c.61.258 1.355.716 2.247 1.264m-3.468.007c-.051.03-.18.127-.259.692c-.078.561-.08 1.357-.08 2.527s.002 1.966.08 2.527c.08.565.208.662.259.692c.037.023.154.094.637-.11c.492-.209 1.14-.604 2.1-1.195c.95-.583 1.586-.976 1.996-1.322c.4-.337.428-.5.428-.592s-.028-.255-.428-.592c-.41-.346-1.047-.74-1.995-1.322c-.962-.591-1.609-.986-2.1-1.194c-.484-.205-.601-.134-.638-.111" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundVideoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2BoldIcon],svg[solar-chat-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 8.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M12.75 12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM7 14.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2BoldDuotoneIcon],svg[solar-chat-square-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 14.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m5-3a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m5-3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarChatSquare2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2BrokenIcon],svg[solar-chat-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 18v-3m5 3v-6m5 6V9m5 3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarChatSquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2LineDuotoneIcon],svg[solar-chat-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 18v-3m5 3v-6m5 6V9"></svg:path></svg:g>`,
})
export class SolarChatSquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2LinearIcon],svg[solar-chat-square-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 18v-3m5 3v-6m5 6V9"></svg:path></svg:g>`,
})
export class SolarChatSquare2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2OutlineIcon],svg[solar-chat-square-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 15a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 11.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M17.75 9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquare2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowBoldIcon],svg[solar-chat-square-arrow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.985 21.449l.489-.824c.378-.64.568-.96.872-1.136c.304-.177.687-.184 1.453-.197c1.13-.02 1.84-.089 2.434-.335a4.5 4.5 0 0 0 2.438-2.435c.161-.39.247-.83.292-1.406c.027-.354.041-.53-.053-.674c-.095-.143-.276-.205-.638-.327C17.864 13.64 14.752 12.481 13 11c-1.98-1.674-3.754-5.054-4.418-6.414c-.142-.29-.213-.435-.336-.511s-.28-.074-.592-.07c-1.808.02-2.637.126-3.504.657a4.5 4.5 0 0 0-1.486 1.486C2 7.23 2 8.703 2 11.65v.9c0 2.096 0 3.145.343 3.972a4.5 4.5 0 0 0 2.437 2.435c.595.246 1.304.316 2.434.335c.766.013 1.15.02 1.453.197c.305.177.494.496.873 1.136l.488.824c.435.735 1.522.735 1.957 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.702 1.217a.696.696 0 0 1-.007 1.035l-1.002.921a47 47 0 0 1 2.467.076c.65.041 1.26.104 1.79.202c.52.096 1.022.237 1.42.46c.74.418 1.363.99 1.817 1.672c.438.656.63 1.398.723 2.292c.09.875.09 1.969.09 3.355v.038c0 .404-.352.732-.786.732s-.785-.328-.785-.732c0-1.433-.001-2.456-.084-3.253c-.08-.785-.236-1.274-.493-1.66a3.8 3.8 0 0 0-1.296-1.191c-.168-.096-.462-.195-.912-.278a14 14 0 0 0-1.59-.177a45 45 0 0 0-2.348-.072l.989.91a.696.696 0 0 1 .007 1.034a.83.83 0 0 1-1.111.006L10.234 4.42A.7.7 0 0 1 10 3.899c0-.196.084-.383.234-.52L12.59 1.21a.83.83 0 0 1 1.11.006" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareArrowBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowBoldDuotoneIcon],svg[solar-chat-square-arrow-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.984 22.495l.537-.907c.416-.703.625-1.055.96-1.25c.334-.194.755-.201 1.598-.216c1.243-.021 2.023-.097 2.678-.368a4.95 4.95 0 0 0 2.68-2.68c.186-.446.28-.951.328-1.623c.025-.355.038-.533-.057-.675s-.275-.203-.636-.324c-1.511-.507-5.014-1.796-6.972-3.451c-2.207-1.867-4.182-5.66-4.889-7.115c-.14-.289-.21-.433-.334-.51c-.123-.076-.28-.074-.592-.071c-2.035.021-2.956.134-3.92.724A4.95 4.95 0 0 0 2.73 5.663C2 6.853 2 8.474 2 11.715v.99c0 2.307 0 3.46.377 4.37a4.95 4.95 0 0 0 2.681 2.679c.654.27 1.434.347 2.678.368c.842.015 1.264.022 1.598.216c.335.195.543.547.96 1.25l.537.907c.478.808 1.674.808 2.153 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.872.24a.766.766 0 0 1-.008 1.137l-1.102 1.014c.959.009 1.881.03 2.714.083c.715.045 1.386.114 1.97.222c.572.106 1.123.26 1.56.507a5.84 5.84 0 0 1 2 1.839c.48.721.693 1.537.794 2.52c.1.963.1 2.166.1 3.691v.042c0 .445-.387.805-.864.805c-.478 0-.865-.36-.865-.805c0-1.576 0-2.702-.091-3.578c-.09-.864-.26-1.402-.543-1.827a4.16 4.16 0 0 0-1.425-1.31c-.186-.105-.509-.214-1.004-.305a15 15 0 0 0-1.75-.195A50 50 0 0 0 13.776 4l1.088 1c.34.313.343.822.008 1.139a.91.91 0 0 1-1.222.007L11.057 3.76a.78.78 0 0 1-.257-.572c0-.215.092-.421.257-.573L13.65.232a.91.91 0 0 1 1.222.007" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareArrowBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowBrokenIcon],svg[solar-chat-square-arrow-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.978 21.456l.643.385zm.488-.814l-.643-.386zm-2.932 0l-.643.385zm.488.814l.643-.386zM12 4.222l-.527-.533a.75.75 0 0 0 0 1.067zm8.25 7.556a.75.75 0 0 0 1.5 0zm-18 0a.75.75 0 0 0 1.5 0zM4.034 16.3a.75.75 0 1 0-1.383.58zm4.177 3.026l-.013.75zm-2.433-.33l-.284.693zm14.88-2.406l.691.29zm-4.869 2.736l-.012-.75zm2.433-.33l.284.693zm.63-14.119l-.39.642zm1.485 1.467l.637-.395zM5.149 4.877l-.389-.642zM3.663 6.344l-.637-.395zm6 13.176l.373-.65zm5.114-16.986a.75.75 0 1 0-1.054-1.068zm-1.054 4.444a.75.75 0 1 0 1.054-1.067zm-4.42-2.005a.75.75 0 1 0-.005-1.5zm12.433 9.492a.75.75 0 0 0-1.499-.04zm-8.115 7.376l.488-.814l-1.286-.77l-.488.813zm-3.73-.814l.488.814l1.286-.77l-.488-.815zm2.444.043a.38.38 0 0 1-.335.18a.38.38 0 0 1-.335-.18l-1.286.771c.726 1.212 2.516 1.212 3.242 0zm-4.112-2.494c-1.13-.02-1.71-.09-2.161-.275l-.568 1.388c.738.302 1.574.367 2.704.387zM2.651 16.88a5.22 5.22 0 0 0 2.843 2.81l.568-1.39a3.72 3.72 0 0 1-2.028-2zm13.151 3.196c1.13-.02 1.966-.085 2.704-.387l-.568-1.388c-.45.184-1.031.256-2.161.275zm4.164-3.776a3.72 3.72 0 0 1-2.028 2l.568 1.39a5.22 5.22 0 0 0 2.843-2.81zM12 4.972c1.48 0 2.895 0 4.074.08c.588.04 1.1.099 1.518.182c.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472a14 14 0 0 0-1.71-.207c-1.24-.084-2.71-.084-4.175-.084zm9.75 6.806c0-1.44 0-2.574-.086-3.48c-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704c.08.816.08 1.865.08 3.335zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.2 5.2 0 0 0-1.734-1.714zM3.75 11.779c0-1.47 0-2.519.08-3.335c.077-.806.225-1.307.47-1.703L3.026 5.95c-.418.673-.601 1.433-.69 2.35c-.087.905-.086 2.039-.086 3.479zm1.01-7.543A5.2 5.2 0 0 0 3.026 5.95l1.274.79a3.7 3.7 0 0 1 1.237-1.22zm6.417 16.021c-.181-.303-.344-.576-.503-.792a2.1 2.1 0 0 0-.638-.594l-.747 1.3c.03.018.081.054.178.185c.106.144.227.344.424.672zm-2.98-.18c.397.006.644.011.831.032c.174.019.232.046.26.062l.748-1.3a2.1 2.1 0 0 0-.845-.253c-.271-.03-.599-.035-.968-.041zm5.912.951a9 9 0 0 1 .424-.672c.097-.131.147-.167.178-.185l-.747-1.3a2.1 2.1 0 0 0-.638.594c-.159.216-.322.489-.503.792zm1.668-2.451c-.37.006-.697.011-.968.04c-.285.032-.57.096-.845.254l.747 1.3c.029-.016.087-.043.26-.062c.188-.02.435-.026.831-.032zm-3.25-13.82l2.25-2.222l-1.054-1.068l-2.25 2.223zm-1.054 0l2.25 2.222l1.054-1.067l-2.25-2.222zM9.298 3.473c-2.236.007-3.368.054-4.538.762l.777 1.284c.758-.459 1.46-.539 3.765-.546zm10.939 10.952c-.026.955-.102 1.471-.271 1.875l1.383.58c.284-.678.361-1.434.387-2.415z"></svg:path>`,
})
export class SolarChatSquareArrowBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowLineDuotoneIcon],svg[solar-chat-square-arrow-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.978 21.455l.643.386zm.488-.814l-.643-.385zm-2.932 0l-.643.386zm.488.814l.643-.385zm-7.68-4.866l.692-.29zm4.869 2.736l-.013.75zm-2.433-.33l-.284.694zm14.88-2.406l.691.29zm-4.869 2.736l-.012-.75zm2.433-.33l.284.694zM5.15 4.877l-.389-.642zM3.663 6.344l-.637-.395zm6 13.176l.373-.65zm-.36-14.547a.75.75 0 1 0-.005-1.5zm12.433 9.491a.75.75 0 0 0-1.499-.04zm-8.115 7.377l.488-.814l-1.286-.771l-.488.814zm-3.73-.814l.488.814l1.286-.771l-.488-.814zm2.444.043a.38.38 0 0 1-.335.18a.38.38 0 0 1-.335-.18l-1.286.77c.726 1.212 2.516 1.212 3.242 0zM3.75 12.666v-.889h-1.5v.89zm-1.5 0c0 1.025 0 1.832.045 2.484c.045.658.14 1.213.356 1.73l1.383-.58c-.126-.302-.203-.673-.243-1.254c-.04-.588-.041-1.334-.041-2.38zm5.973 5.91c-1.13-.02-1.71-.091-2.161-.276l-.568 1.389c.738.302 1.574.367 2.704.386zm-5.572-1.697a5.22 5.22 0 0 0 2.843 2.81l.568-1.389a3.72 3.72 0 0 1-2.028-2zm13.151 3.196c1.13-.019 1.966-.084 2.704-.386l-.568-1.389c-.45.185-1.031.256-2.161.276zm4.164-3.776a3.72 3.72 0 0 1-2.028 2.002l.568 1.388a5.22 5.22 0 0 0 2.843-2.81zM3.75 11.777c0-1.47 0-2.518.08-3.335c.077-.805.225-1.307.47-1.703l-1.274-.79c-.418.672-.601 1.433-.69 2.35c-.087.905-.086 2.038-.086 3.478zm1.01-7.542a5.2 5.2 0 0 0-1.734 1.714l1.274.79a3.7 3.7 0 0 1 1.237-1.22zm6.417 16.02c-.181-.303-.344-.576-.503-.791a2.1 2.1 0 0 0-.638-.595l-.747 1.3c.03.018.081.054.178.185c.106.144.227.345.424.673zm-2.98-.18c.397.007.644.012.831.032c.174.02.232.046.26.063l.748-1.3a2.1 2.1 0 0 0-.845-.254c-.271-.03-.599-.034-.968-.04zm5.912.952a9 9 0 0 1 .424-.673c.097-.13.147-.167.178-.184l-.747-1.3a2.05 2.05 0 0 0-.638.594c-.159.215-.322.488-.503.792zm1.668-2.451c-.37.006-.697.01-.968.04a2.1 2.1 0 0 0-.845.253l.747 1.3c.029-.016.087-.043.26-.062a11 11 0 0 1 .831-.032zM9.297 3.473c-2.235.007-3.367.054-4.537.762l.777 1.283c.758-.458 1.46-.538 3.765-.545zm10.94 10.951c-.026.956-.102 1.472-.271 1.875l1.383.58c.284-.677.361-1.434.387-2.415z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12 4.222l-.527-.533a.75.75 0 0 0 0 1.067zm8.25 7.556a.75.75 0 0 0 1.5 0zm-1.399-6.9l-.388.64zm1.486 1.466l.637-.395zm-5.56-3.81a.75.75 0 1 0-1.054-1.068zm-1.054 4.444a.75.75 0 1 0 1.054-1.067zM12 4.972c1.48 0 2.895 0 4.074.08c.588.04 1.1.099 1.518.182c.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472a14 14 0 0 0-1.71-.207c-1.24-.084-2.71-.084-4.175-.084zm9.75 6.806c0-1.44 0-2.574-.086-3.48c-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704c.08.816.08 1.865.08 3.335zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.2 5.2 0 0 0-1.734-1.714zm-5.936-.762l2.25-2.222l-1.054-1.068l-2.25 2.223zm-1.054 0l2.25 2.222l1.054-1.067l-2.25-2.222z"></svg:path>`,
})
export class SolarChatSquareArrowLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowLinearIcon],svg[solar-chat-square-arrow-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.978 21.456l.643.385zm.488-.814l-.643-.386zm-2.932 0l-.643.385zm.488.814l.643-.386zM12 4.222l-.527-.533a.75.75 0 0 0 0 1.067zm8.25 7.556a.75.75 0 0 0 1.5 0zM3.343 16.59l.691-.29zm4.868 2.736l-.013.75zm-2.433-.33l-.284.693zm14.88-2.406l.691.29zm-4.869 2.736l-.012-.75zm2.433-.33l.284.693zm.63-14.119l-.39.642zm1.485 1.467l.637-.395zM5.149 4.877l-.389-.642zM3.663 6.344l-.637-.395zm6 13.176l.373-.65zm5.114-16.986a.75.75 0 1 0-1.054-1.068zm-1.054 4.444a.75.75 0 1 0 1.054-1.067zm-4.42-2.005a.75.75 0 1 0-.005-1.5zm12.433 9.492a.75.75 0 0 0-1.499-.04zm-8.115 7.376l.488-.814l-1.286-.77l-.488.813zm-3.73-.814l.488.814l1.286-.77l-.488-.815zm2.444.043a.38.38 0 0 1-.335.18a.38.38 0 0 1-.335-.18l-1.286.771c.726 1.212 2.516 1.212 3.242 0zM3.75 12.667v-.89h-1.5v.89zm-1.5 0c0 1.025 0 1.832.045 2.483c.045.659.14 1.214.356 1.73l1.383-.58c-.126-.301-.203-.672-.243-1.253c-.04-.588-.041-1.335-.041-2.38zm5.973 5.909c-1.13-.02-1.71-.09-2.161-.275l-.568 1.388c.738.302 1.574.367 2.704.387zM2.651 16.88a5.22 5.22 0 0 0 2.843 2.81l.568-1.39a3.72 3.72 0 0 1-2.028-2zm13.151 3.196c1.13-.02 1.966-.085 2.704-.387l-.568-1.388c-.45.184-1.031.256-2.161.275zm4.164-3.776a3.72 3.72 0 0 1-2.028 2l.568 1.39a5.22 5.22 0 0 0 2.843-2.81zM12 4.972c1.48 0 2.895 0 4.074.08c.588.04 1.1.099 1.518.182c.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472a14 14 0 0 0-1.71-.207c-1.24-.084-2.71-.084-4.175-.084zm9.75 6.806c0-1.44 0-2.574-.086-3.48c-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704c.08.816.08 1.865.08 3.335zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.2 5.2 0 0 0-1.734-1.714zM3.75 11.779c0-1.47 0-2.519.08-3.335c.077-.806.225-1.307.47-1.703L3.026 5.95c-.418.673-.601 1.433-.69 2.35c-.087.905-.086 2.039-.086 3.479zm1.01-7.543A5.2 5.2 0 0 0 3.026 5.95l1.274.79a3.7 3.7 0 0 1 1.237-1.22zm6.417 16.021c-.181-.303-.344-.576-.503-.792a2.1 2.1 0 0 0-.638-.594l-.747 1.3c.03.018.081.054.178.185c.106.144.227.344.424.672zm-2.98-.18c.397.006.644.011.831.032c.174.019.232.046.26.062l.748-1.3a2.1 2.1 0 0 0-.845-.253c-.271-.03-.599-.035-.968-.041zm5.912.951a9 9 0 0 1 .424-.672c.097-.131.147-.167.178-.185l-.747-1.3a2.1 2.1 0 0 0-.638.594c-.159.216-.322.489-.503.792zm1.668-2.451c-.37.006-.697.011-.968.04c-.285.032-.57.096-.845.254l.747 1.3c.029-.016.087-.043.26-.062c.188-.02.435-.026.831-.032zm-3.25-13.82l2.25-2.222l-1.054-1.068l-2.25 2.223zm-1.054 0l2.25 2.222l1.054-1.067l-2.25-2.222zM9.298 3.473c-2.236.007-3.368.054-4.538.762l.777 1.284c.758-.459 1.46-.539 3.765-.546zm10.939 10.952c-.026.955-.102 1.471-.271 1.875l1.383.58c.284-.678.361-1.434.387-2.415z"></svg:path>`,
})
export class SolarChatSquareArrowLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowOutlineIcon],svg[solar-chat-square-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.784 1.473a.75.75 0 0 1-.007 1.06l-.956.945c.832.009 1.632.029 2.354.078c.621.042 1.203.106 1.71.207c.496.099.975.243 1.355.472a5.2 5.2 0 0 1 1.734 1.714c.418.673.601 1.433.69 2.35c.086.897.086 2.018.086 3.44v.039a.75.75 0 0 1-1.5 0c0-1.47 0-2.519-.08-3.335c-.077-.806-.225-1.307-.47-1.703a3.7 3.7 0 0 0-1.237-1.221c-.161-.098-.442-.2-.87-.285c-.42-.083-.93-.142-1.519-.182a40 40 0 0 0-2.241-.074l.944.933a.75.75 0 1 1-1.054 1.067l-2.25-2.222a.75.75 0 0 1 0-1.067l2.25-2.223a.75.75 0 0 1 1.06.007M10.05 4.221a.75.75 0 0 1-.748.752c-2.305.007-3.007.087-3.765.546A3.7 3.7 0 0 0 4.3 6.739c-.245.397-.393.898-.47 1.704c-.08.816-.08 1.865-.08 3.335v.889c0 1.046 0 1.792.041 2.38c.04.58.117.952.243 1.253a3.72 3.72 0 0 0 2.028 2c.45.185 1.031.257 2.161.276h.031c.356.006.673.012.937.04c.285.032.57.096.845.254c.273.156.47.366.638.594c.154.21.312.473.487.766l.504.84a.38.38 0 0 0 .335.18a.38.38 0 0 0 .335-.18l.503-.84c.176-.293.334-.557.488-.766a2.1 2.1 0 0 1 .638-.594a2.1 2.1 0 0 1 .845-.253c.264-.03.58-.035.937-.04l.03-.001c1.13-.02 1.711-.09 2.162-.275a3.72 3.72 0 0 0 2.028-2.001c.169-.404.245-.92.271-1.876a.75.75 0 0 1 1.5.04c-.027.982-.104 1.738-.388 2.416a5.22 5.22 0 0 1-2.843 2.81c-.738.301-1.574.366-2.704.386a10 10 0 0 0-.83.032c-.174.019-.232.046-.261.062a.6.6 0 0 0-.178.185a9 9 0 0 0-.424.672l-.488.814c-.726 1.212-2.516 1.212-3.242 0l-.488-.814a9 9 0 0 0-.424-.672c-.097-.131-.147-.167-.178-.185c-.029-.016-.087-.043-.26-.062a10 10 0 0 0-.831-.032c-1.13-.02-1.966-.085-2.704-.387a5.22 5.22 0 0 1-2.843-2.81c-.216-.515-.31-1.07-.356-1.729c-.045-.646-.045-1.444-.045-2.455v-.957c0-1.421 0-2.542.086-3.44c.089-.916.272-1.676.69-2.349A5.2 5.2 0 0 1 4.76 4.235c1.17-.708 2.302-.755 4.538-.762a.75.75 0 0 1 .752.748" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareArrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareBoldIcon],svg[solar-chat-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262"></svg:path>`,
})
export class SolarChatSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareBoldDuotoneIcon],svg[solar-chat-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.975 13.814A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.389l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.5 2h-3c-1.94 0-3.305 0-4.346.153Q6.001 3.055 6 4c0 6.075 4.925 11 11 11c1.79 0 3.48-.428 4.975-1.187C22 13.192 22 12.441 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2" opacity=".5"></svg:path>`,
})
export class SolarChatSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareBrokenIcon],svg[solar-chat-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path>`,
})
export class SolarChatSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallBoldIcon],svg[solar-chat-square-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M12 6.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M8.75 9a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM16 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallBoldDuotoneIcon],svg[solar-chat-square-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-4 2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 8 8.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarChatSquareCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallBrokenIcon],svg[solar-chat-square-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15V7m-4 6V9m8 4V9"></svg:path><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path></svg:g>`,
})
export class SolarChatSquareCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallLineDuotoneIcon],svg[solar-chat-square-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15V7m-4 6V9m8 4V9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatSquareCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallLinearIcon],svg[solar-chat-square-call-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15V7m-4 6V9m8 4V9"></svg:path></svg:g>`,
})
export class SolarChatSquareCallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallOutlineIcon],svg[solar-chat-square-call-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089M12 6.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-4 2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 8 8.25m8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckBoldIcon],svg[solar-chat-square-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M15.53 8.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411l3.48-3.48a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckBoldDuotoneIcon],svg[solar-chat-square-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.53 9.53a.75.75 0 0 0-1.06-1.06l-3.48 3.48l-1.47-1.411a.75.75 0 1 0-1.04 1.082l2 1.92a.75.75 0 0 0 1.05-.01z"></svg:path>`,
})
export class SolarChatSquareCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckBrokenIcon],svg[solar-chat-square-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 11.08L11 13l4-4"></svg:path></svg:g>`,
})
export class SolarChatSquareCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckLineDuotoneIcon],svg[solar-chat-square-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 11.08L11 13l4-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatSquareCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckLinearIcon],svg[solar-chat-square-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 11.08L11 13l4-4"></svg:path></svg:g>`,
})
export class SolarChatSquareCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckOutlineIcon],svg[solar-chat-square-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089m8.792 5.63a.75.75 0 0 1 0 1.061l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411l3.48-3.48a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeBoldIcon],svg[solar-chat-square-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M14.97 7.299a.75.75 0 0 1 1.06 0l.209.209c.635.635 1.165 1.165 1.529 1.642c.384.503.654 1.035.654 1.68c0 .644-.27 1.176-.654 1.68c-.364.476-.894 1.006-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.141 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.388-.752-.847-1.434-1.529l-.171-.171a.75.75 0 0 1 0-1.06m-.952-1.105a.75.75 0 1 0-1.449-.388l-2.588 9.66a.75.75 0 1 0 1.45.387zM9.03 7.3a.75.75 0 0 1 0 1.06l-.171.172c-.682.682-1.139 1.141-1.434 1.529c-.283.37-.347.585-.347.77c0 .184.064.4.347.77c.295.387.752.846 1.434 1.528l.171.171a.75.75 0 1 1-1.06 1.06l-.172-.17l-.037-.037c-.635-.636-1.165-1.165-1.529-1.643c-.384-.503-.654-1.035-.654-1.68c0-.644.27-1.176.654-1.68c.364-.476.894-1.006 1.53-1.641l.036-.037l.172-.172a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCodeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeBoldDuotoneIcon],svg[solar-chat-square-code-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.792 21.319l-.597 1.008c-.531.897-1.859.897-2.39 0l-.597-1.008c-.462-.781-.693-1.172-1.065-1.388c-.371-.216-.84-.224-1.774-.24c-1.381-.024-2.247-.109-2.974-.41a5.5 5.5 0 0 1-2.976-2.976C1 15.294 1 14.013 1 11.45v-1.1c0-3.6 0-5.401.81-6.724A5.5 5.5 0 0 1 3.626 1.81C4.95 1 6.75 1 10.35 1h3.3c3.6 0 5.401 0 6.724.81a5.5 5.5 0 0 1 1.816 1.816C23 4.95 23 6.75 23 10.35v1.1c0 2.563 0 3.844-.419 4.855a5.5 5.5 0 0 1-2.976 2.976c-.727.301-1.593.386-2.974.41c-.935.016-1.403.024-1.774.24c-.372.216-.603.607-1.065 1.388" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.267 6.83a.825.825 0 0 1 1.167 0l.188.188l.04.04c.7.7 1.283 1.282 1.683 1.807c.423.554.72 1.14.72 1.848s-.297 1.294-.72 1.848c-.4.524-.983 1.107-1.682 1.806l-.23.23a.825.825 0 0 1-1.166-1.167l.189-.19c.75-.749 1.252-1.254 1.577-1.68c.31-.407.381-.644.381-.847s-.07-.44-.38-.847c-.326-.426-.828-.931-1.578-1.681l-.189-.189a.825.825 0 0 1 0-1.166m-1.63-2.226c.44.118.701.57.583 1.01L11.373 16.24a.825.825 0 1 1-1.594-.427l2.847-10.625a.825.825 0 0 1 1.01-.584M8.733 6.83a.825.825 0 0 0-1.167 0l-.188.188l-.04.04c-.7.7-1.283 1.282-1.683 1.807c-.423.554-.72 1.14-.72 1.848s.297 1.294.72 1.848c.4.524.983 1.107 1.682 1.806l.23.23a.825.825 0 0 0 1.166-1.167l-.189-.19c-.75-.749-1.252-1.254-1.577-1.68c-.31-.407-.381-.644-.381-.847s.07-.44.38-.847c.326-.426.828-.931 1.578-1.681l.189-.189a.825.825 0 0 0 0-1.166" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCodeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeBrokenIcon],svg[solar-chat-square-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.5 7.83l.172.172c1.333 1.333 2 2 2 2.828c0 .829-.667 1.495-2 2.829l-.172.171M13.294 6L12 10.83l-1.294 4.83M8.5 7.83l-.172.172c-1.333 1.333-2 2-2 2.828c0 .829.667 1.495 2 2.829l.172.171"></svg:path></svg:g>`,
})
export class SolarChatSquareCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeLineDuotoneIcon],svg[solar-chat-square-code-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.5 7.83l.172.172c1.333 1.333 2 2 2 2.828c0 .829-.667 1.495-2 2.829l-.172.171M13.294 6L12 10.83l-1.294 4.83M8.5 7.83l-.172.172c-1.333 1.333-2 2-2 2.828c0 .829.667 1.495 2 2.829l.172.171" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChatSquareCodeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeLinearIcon],svg[solar-chat-square-code-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.5 7.83l.172.172c1.333 1.333 2 2 2 2.828c0 .829-.667 1.495-2 2.829l-.172.171M13.294 6L12 10.83l-1.294 4.83M8.5 7.83l-.171.172c-1.334 1.333-2 2-2 2.828c0 .829.666 1.495 2 2.829l.171.171"></svg:path></svg:g>`,
})
export class SolarChatSquareCodeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeOutlineIcon],svg[solar-chat-square-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089m6.75 2.437a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.66a.75.75 0 0 1 .918-.53M9.03 7.299a.75.75 0 0 1 0 1.06l-.171.172c-.682.682-1.139 1.141-1.434 1.529c-.283.37-.347.585-.347.77c0 .184.064.4.347.77c.295.387.752.846 1.434 1.528l.171.171a.75.75 0 1 1-1.06 1.06l-.209-.207c-.635-.636-1.165-1.165-1.529-1.643c-.384-.503-.654-1.035-.654-1.68c0-.644.27-1.176.654-1.68c.364-.476.894-1.006 1.53-1.641l.208-.209a.75.75 0 0 1 1.06 0m5.94 0a.75.75 0 0 1 1.06 0l.209.209c.635.635 1.165 1.165 1.529 1.642c.384.503.654 1.035.654 1.68c0 .644-.27 1.176-.654 1.68c-.364.476-.894 1.006-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.141 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.388-.752-.847-1.434-1.529l-.171-.171a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeBoldIcon],svg[solar-chat-square-like-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M7.5 9.715c0 1.752 2.163 3.615 3.49 4.593c.454.335.681.502 1.01.502s.556-.167 1.01-.502c1.327-.978 3.49-2.84 3.49-4.593c0-2.677-2.475-3.677-4.5-1.609c-2.025-2.068-4.5-1.068-4.5 1.609" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareLikeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeBoldDuotoneIcon],svg[solar-chat-square-like-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.99 14.308c-1.327-.978-3.49-2.84-3.49-4.593c0-2.677 2.475-3.677 4.5-1.609c2.025-2.068 4.5-1.068 4.5 1.609c0 1.752-2.163 3.615-3.49 4.593c-.454.335-.681.502-1.01.502s-.556-.167-1.01-.502"></svg:path>`,
})
export class SolarChatSquareLikeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeBrokenIcon],svg[solar-chat-square-like-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.99 14.308l.445-.604zM12 8.106l-.536.525a.75.75 0 0 0 1.072 0zm1.01 6.202l-.445-.604zM12 14.81v-.75zm-.565-1.106c-.644-.474-1.468-1.147-2.123-1.896c-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081c.758.865 1.679 1.613 2.362 2.116zM8.25 9.715c0-1.107.495-1.69 1.003-1.88c.518-.194 1.342-.09 2.211.797l1.072-1.05C11.38 6.401 9.955 5.97 8.728 6.428C7.493 6.89 6.75 8.145 6.75 9.715zm5.205 5.198c.683-.504 1.604-1.25 2.362-2.116c.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093c-.655.749-1.48 1.422-2.123 1.896zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287c-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798c.51.19 1.004.774 1.004 1.882zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a5 5 0 0 1-.464-.32zm2.02-1.208c-.243.18-.366.268-.464.321c-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648zm.522 7.683l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path>`,
})
export class SolarChatSquareLikeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeLineDuotoneIcon],svg[solar-chat-square-like-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path fill="currentColor" d="m10.99 14.308l.445-.604zM12 8.106l-.536.525a.75.75 0 0 0 1.072 0zm1.01 6.202l-.445-.604zM12 14.81v-.75zm-.565-1.106c-.644-.474-1.468-1.147-2.123-1.896c-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081c.758.865 1.679 1.613 2.362 2.116zM8.25 9.715c0-1.107.495-1.69 1.003-1.88c.518-.194 1.342-.09 2.211.797l1.072-1.05C11.38 6.401 9.955 5.97 8.728 6.428C7.493 6.89 6.75 8.145 6.75 9.715zm5.205 5.198c.683-.504 1.604-1.25 2.362-2.116c.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093c-.655.749-1.48 1.422-2.123 1.896zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287c-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798c.51.19 1.004.774 1.004 1.882zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a5 5 0 0 1-.464-.32zm2.02-1.208c-.243.18-.366.268-.464.321c-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648z" opacity=".5"></svg:path>`,
})
export class SolarChatSquareLikeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeLinearIcon],svg[solar-chat-square-like-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037zm-5.208-3.934l.445-.604zM12 8.106l-.536.525a.75.75 0 0 0 1.072 0zm1.01 6.202l-.445-.604zM12 14.81v-.75zm-.565-1.106c-.644-.474-1.468-1.147-2.123-1.896c-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081c.758.865 1.679 1.613 2.362 2.116zM8.25 9.715c0-1.107.495-1.69 1.003-1.88c.518-.194 1.342-.09 2.211.797l1.072-1.05C11.38 6.401 9.955 5.97 8.728 6.428C7.493 6.89 6.75 8.145 6.75 9.715zm5.205 5.198c.683-.504 1.604-1.25 2.362-2.116c.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093c-.655.749-1.48 1.422-2.123 1.896zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287c-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798c.51.19 1.004.774 1.004 1.882zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a5 5 0 0 1-.464-.32zm2.02-1.208c-.243.18-.366.268-.464.321c-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648z"></svg:path>`,
})
export class SolarChatSquareLikeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeOutlineIcon],svg[solar-chat-square-like-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089m8.534 3.59c1.235.461 1.978 1.716 1.978 3.286c0 1.16-.699 2.242-1.433 3.081c-.758.865-1.679 1.613-2.362 2.116l-.08.06c-.372.276-.793.588-1.375.588s-1.003-.312-1.374-.588l-.08-.06c-.684-.504-1.605-1.25-2.363-2.116c-.734-.839-1.433-1.92-1.433-3.081c0-1.57.743-2.825 1.978-3.287c1.043-.39 2.23-.136 3.272.674c1.043-.81 2.23-1.063 3.272-.674m-.525 1.404c-.518-.193-1.342-.09-2.211.798a.75.75 0 0 1-1.072 0c-.869-.888-1.693-.99-2.21-.798c-.51.19-1.004.774-1.004 1.882c0 .591.383 1.318 1.062 2.093c.655.749 1.48 1.422 2.123 1.896c.243.18.366.268.464.321c.066.036.084.035.099.035h.004c.015 0 .034 0 .099-.035a5 5 0 0 0 .464-.32c.644-.475 1.468-1.148 2.123-1.897c.68-.775 1.062-1.502 1.062-2.093c0-1.108-.495-1.691-1.003-1.882" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareLikeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLineDuotoneIcon],svg[solar-chat-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path>`,
})
export class SolarChatSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLinearIcon],svg[solar-chat-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path>`,
})
export class SolarChatSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareOutlineIcon],svg[solar-chat-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095c1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6c.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762c-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537c-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadBoldIcon],svg[solar-chat-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1l-.001-1.048c-.001-.427-.524-.669-.902-.47a4.5 4.5 0 0 1-6.08-6.08c.2-.377-.041-.9-.469-.9Q14.054 1.998 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0"></svg:path><svg:circle cx="19" cy="5" r="3" fill="currentColor"></svg:circle>`,
})
export class SolarChatUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadBoldDuotoneIcon],svg[solar-chat-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M15.636 2.011C15.011 2 14.306 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-.805 0-1.511-.011-2.136a4.5 4.5 0 0 1-6.353-6.353" opacity=".5"></svg:path>`,
})
export class SolarChatUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadBrokenIcon],svg[solar-chat-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM13.5 2.75a.75.75 0 0 0 0-1.5zm9.25 7.75a.75.75 0 0 0-1.5 0zm-21.5 0a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zM4.388 2.737l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:circle cx="19" cy="5" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarChatUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadLineDuotoneIcon],svg[solar-chat-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM13.5 2.75a.75.75 0 0 0 0-1.5zm9.25 7.75a.75.75 0 0 0-1.5 0zM2.38 15.913l.694-.287zm5.41 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zM4.388 2.737l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarChatUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadLinearIcon],svg[solar-chat-unread-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM13.5 2.75a.75.75 0 0 0 0-1.5zm9.25 7.75a.75.75 0 0 0-1.5 0zM2.38 15.913l.694-.287zm5.41 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zM4.388 2.737l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:circle cx="19" cy="5" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarChatUnreadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadOutlineIcon],svg[solar-chat-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.46 1.25h3.04a.75.75 0 0 1 0 1.5h-3c-1.651 0-2.837 0-3.762.089c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96c-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685c.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045c.311.035.616.104.909.274c.29.17.5.395.682.645c.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856c.182-.25.392-.476.682-.645c.293-.17.598-.24.909-.274c.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441c.046-.666.046-1.51.046-2.685v-1a.75.75 0 0 1 1.5 0v1.028c0 1.141 0 2.036-.05 2.759c-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43a11 11 0 0 0-.929.036c-.198.022-.275.054-.32.08c-.047.028-.112.078-.224.232c-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a11 11 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232c-.045-.026-.122-.058-.32-.08c-.212-.023-.49-.03-.93-.037c-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.338-1.178-.389-1.913c-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865c.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25M19 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleBoldIcon],svg[solar-check-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleBoldDuotoneIcon],svg[solar-check-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarCheckCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleBrokenIcon],svg[solar-check-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCheckCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleLineDuotoneIcon],svg[solar-check-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarCheckCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleLinearIcon],svg[solar-check-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarCheckCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleOutlineIcon],svg[solar-check-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadBoldIcon],svg[solar-check-read-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m2.474-13.581a.75.75 0 0 1 .107 1.055l-5.714 7a.75.75 0 0 1-1.162 0l-2.286-2.8a.75.75 0 0 1 1.162-.948l1.705 2.088l5.133-6.288a.75.75 0 0 1 1.055-.107m4 0a.75.75 0 0 1 .107 1.055l-5.714 7a.75.75 0 0 1-1.21-.064l-.285-.438a.75.75 0 0 1 .88-1.116l5.167-6.33a.75.75 0 0 1 1.055-.107" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckReadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadBoldDuotoneIcon],svg[solar-check-read-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.581 9.474a.75.75 0 1 0-1.162-.948l-5.168 6.33a.749.749 0 0 0-.879 1.116l.286.438a.75.75 0 0 0 1.209.064zm-4 0a.75.75 0 1 0-1.162-.948l-5.133 6.288l-1.705-2.088a.75.75 0 0 0-1.162.948l2.286 2.8a.75.75 0 0 0 1.162 0z"></svg:path>`,
})
export class SolarCheckReadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadBrokenIcon],svg[solar-check-read-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4.565 12.407a.75.75 0 1 0-1.13.986zM7.143 16.5l-.565.493a.75.75 0 0 0 1.13 0zm8.422-8.507a.75.75 0 1 0-1.13-.986zm-5.059 3.514a.75.75 0 0 0 1.13.986zm-.834 3.236a.75.75 0 1 0-1.13-.986zm-6.237-1.35l3.143 3.6l1.13-.986l-3.143-3.6zm4.273 3.6l1.964-2.25l-1.13-.986l-1.964 2.25zm3.928-4.5l1.965-2.25l-1.13-.986l-1.965 2.25zm1.965-2.25l1.964-2.25l-1.13-.986l-1.964 2.25z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 7.563l-4.286 4.5M11 16l.429.563l2.143-2.25"></svg:path></svg:g>`,
})
export class SolarCheckReadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadLineDuotoneIcon],svg[solar-check-read-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 12.9l3.143 3.6L15 7.5" opacity=".5"></svg:path><svg:path d="m20 7.563l-8.571 9L11 16"></svg:path></svg:g>`,
})
export class SolarCheckReadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadLinearIcon],svg[solar-check-read-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 12.9l3.143 3.6L15 7.5m5 .063l-8.572 9L11 16"></svg:path>`,
})
export class SolarCheckReadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadOutlineIcon],svg[solar-check-read-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072m5.025.085c.3.285.311.76.025 1.06l-8.571 9a.75.75 0 0 1-1.14-.063l-.429-.563a.75.75 0 0 1 1.076-1.032l7.978-8.377a.75.75 0 0 1 1.06-.026" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckReadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareBoldIcon],svg[solar-check-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m4.03-13.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l4.47-4.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareBoldDuotoneIcon],svg[solar-check-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l4.47-4.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarCheckSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareBrokenIcon],svg[solar-check-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCheckSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareLineDuotoneIcon],svg[solar-check-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarCheckSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareLinearIcon],svg[solar-check-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarCheckSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareOutlineIcon],svg[solar-check-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistBoldIcon],svg[solar-checklist-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m-3.202 4.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChecklistBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistBoldDuotoneIcon],svg[solar-checklist-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M8.048 16.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path>`,
})
export class SolarChecklistBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistBrokenIcon],svg[solar-checklist-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 5.5L3.214 7L7.5 3M2 12.5L3.214 14L7.5 10M2 19.5L3.214 21L7.5 17"></svg:path><svg:path d="M22 12h-5m-5 0h1.5M12 19h5m3.5 0H22m0-14H12"></svg:path></svg:g>`,
})
export class SolarChecklistBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistLineDuotoneIcon],svg[solar-checklist-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 5.5L3.214 7L7.5 3"></svg:path><svg:path stroke-linejoin="round" d="M2 12.5L3.214 14L7.5 10" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M2 19.5L3.214 21L7.5 17"></svg:path><svg:path d="M22 19H12"></svg:path><svg:path d="M22 12H12" opacity=".5"></svg:path><svg:path d="M22 5H12"></svg:path></svg:g>`,
})
export class SolarChecklistLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistLinearIcon],svg[solar-checklist-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 5.5L3.214 7L7.5 3M2 12.5L3.214 14L7.5 10M2 19.5L3.214 21L7.5 17"></svg:path><svg:path d="M22 19H12m10-7H12m10-7H12"></svg:path></svg:g>`,
})
export class SolarChecklistLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticBoldIcon],svg[solar-checklist-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.08 4.053a.75.75 0 1 0-1.087-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0zM13 8.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-2.457 6.267a.75.75 0 1 0-1.086-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0zM13 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChecklistMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticBoldDuotoneIcon],svg[solar-checklist-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.543 7.517a.75.75 0 1 0-1.086-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0zM13 8.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-2.457 6.267a.75.75 0 1 0-1.086-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0zM13 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarChecklistMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticBrokenIcon],svg[solar-checklist-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7"></svg:path><svg:path d="M13 9h5m-5 7h5m4-4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarChecklistMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticLineDuotoneIcon],svg[solar-checklist-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7"></svg:path><svg:path stroke-linecap="round" d="M13 9h5m-5 7h5"></svg:path></svg:g>`,
})
export class SolarChecklistMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticLinearIcon],svg[solar-checklist-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7"></svg:path><svg:path stroke-linecap="round" d="M13 9h5m-5 7h5"></svg:path></svg:g>`,
})
export class SolarChecklistMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticOutlineIcon],svg[solar-checklist-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m3.904 3.53a.75.75 0 0 1 .026 1.061l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63l2.314-2.43a.75.75 0 0 1 1.06-.026M12.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m-1.733 4.457c.3.286.312.76.026 1.06l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63l2.314-2.43a.75.75 0 0 1 1.06-.026M12.25 16a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChecklistMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistOutlineIcon],svg[solar-checklist-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m-3.202 4.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChecklistOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatBoldIcon],svg[solar-chef-hat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a5 5 0 0 0-2 9.584v2.666h14v-2.666a5.001 5.001 0 0 0-2.737-9.53a4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5m11.998 13.75H5.002c.01 1.397.081 2.162.584 2.664C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586c.503-.502.574-1.267.584-2.664"></svg:path>`,
})
export class SolarChefHatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatBoldDuotoneIcon],svg[solar-chef-hat-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.999 18H5.002c.01 1.397.082 2.912.584 3.414C6.172 22 7.115 22 9 22h6c1.886 0 2.829 0 3.415-.586c.502-.502.573-2.017.584-3.414"></svg:path><svg:path fill="currentColor" d="M7 5a5 5 0 0 0-2 9.584V18h14v-3.416a5.001 5.001 0 0 0-2.737-9.53a4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5" opacity=".5"></svg:path>`,
})
export class SolarChefHatBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatBrokenIcon],svg[solar-chef-hat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM14 21.25a.75.75 0 0 0 0 1.5zm-4 1.5a.75.75 0 0 0 0-1.5zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-8 15.5c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5zM15 21.25h-1v1.5h1zm-5 0H9v1.5h1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h8m6 0h-2"></svg:path></svg:g>`,
})
export class SolarChefHatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartBoldIcon],svg[solar-chef-hat-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10a5 5 0 0 1 5.737-4.946a4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584v2.666H5v-2.666A5 5 0 0 1 2 10m9.043 3.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005c1.35-1.292 3-.668 3 1.005c0 .985-1.165 2.025-2.043 2.67c-.42.307-.63.461-.957.461c-.328 0-.537-.154-.957-.462" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.586 21.414c-.503-.502-.574-1.267-.584-2.664h13.996c-.01 1.397-.081 2.162-.584 2.664C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586"></svg:path>`,
})
export class SolarChefHatHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartBoldDuotoneIcon],svg[solar-chef-hat-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.586 21.414c-.502-.502-.574-2.017-.584-3.414h13.997c-.01 1.397-.082 2.912-.584 3.414C17.829 22 16.885 22 15 22H9c-1.885 0-2.828 0-3.414-.586"></svg:path><svg:path fill="currentColor" d="M2 10a5 5 0 0 1 5.737-4.946a4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584V18H5v-3.416A5 5 0 0 1 2 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.043 13.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005c1.35-1.292 3-.668 3 1.005c0 .985-1.165 2.025-2.043 2.67c-.42.307-.63.461-.957.461c-.328 0-.537-.154-.957-.462"></svg:path>`,
})
export class SolarChefHatHeartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartBrokenIcon],svg[solar-chef-hat-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m11.043 13.669l-.444.605zM12 9.995l-.519.542a.75.75 0 0 0 1.038 0zm.957 3.674l-.444-.605zm-.957.462v-.75zm-.514-1.067c-.417-.306-.878-.69-1.227-1.092c-.368-.426-.509-.757-.509-.972h-1.5c0 .77.441 1.451.875 1.953c.453.524 1.014.983 1.474 1.32zM9.75 11c0-.576.263-.826.492-.907c.25-.088.714-.06 1.24.444l1.037-1.084c-.825-.79-1.861-1.095-2.773-.775C8.812 9.005 8.25 9.903 8.25 11zm3.65 3.274c.46-.338 1.022-.797 1.475-1.321c.434-.502.875-1.183.875-1.953h-1.5c0 .215-.141.546-.51.972c-.348.403-.809.786-1.226 1.092zM15.75 11c0-1.097-.562-1.995-1.496-2.322c-.912-.32-1.948-.014-2.773.775l1.038 1.084c.525-.504.989-.532 1.24-.444c.228.08.491.331.491.907zm-5.15 3.274c.368.27.782.607 1.4.607v-1.5c-.024 0-.04 0-.094-.029a4 4 0 0 1-.42-.288zm1.914-1.21a4 4 0 0 1-.42.288c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.607zM19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM14 21.25a.75.75 0 0 0 0 1.5zm-4 1.5a.75.75 0 0 0 0-1.5zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-8 15.5c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5zM15 21.25h-1v1.5h1zm-5 0H9v1.5h1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h8m6 0h-2"></svg:path></svg:g>`,
})
export class SolarChefHatHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartLineDuotoneIcon],svg[solar-chef-hat-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5z"></svg:path><svg:path fill="currentColor" d="m11.043 13.669l-.444.605zM12 9.995l-.519.542a.75.75 0 0 0 1.038 0zm.957 3.674l-.444-.605zm-.957.462v-.75zm-.514-1.067c-.417-.306-.878-.69-1.227-1.092c-.368-.426-.509-.757-.509-.972h-1.5c0 .77.441 1.451.875 1.953c.453.524 1.014.983 1.474 1.32zM9.75 11c0-.576.263-.826.492-.907c.25-.088.714-.06 1.24.444l1.037-1.084c-.825-.79-1.861-1.095-2.773-.775C8.812 9.005 8.25 9.903 8.25 11zm3.65 3.274c.46-.338 1.022-.797 1.475-1.321c.434-.502.875-1.183.875-1.953h-1.5c0 .215-.141.546-.51.972c-.348.403-.809.786-1.226 1.092zM15.75 11c0-1.097-.562-1.995-1.496-2.322c-.912-.32-1.948-.014-2.773.775l1.038 1.084c.525-.504.989-.532 1.24-.444c.228.08.491.331.491.907zm-5.15 3.274c.368.27.782.607 1.4.607v-1.5c-.024 0-.04 0-.094-.029a4 4 0 0 1-.42-.288zm1.914-1.21a4 4 0 0 1-.42.288c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.607z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChefHatHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartLinearIcon],svg[solar-chef-hat-heart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5zm4.293 7.169l-.444.605zM12 9.995l-.519.542a.75.75 0 0 0 1.038 0zm.957 3.674l-.444-.605zm-.957.462v-.75zm-.514-1.067c-.417-.306-.878-.69-1.227-1.092c-.368-.426-.509-.757-.509-.972h-1.5c0 .77.441 1.451.875 1.953c.453.524 1.014.983 1.474 1.32zM9.75 11c0-.576.263-.826.492-.907c.25-.088.714-.06 1.24.444l1.037-1.084c-.825-.79-1.861-1.095-2.773-.775C8.812 9.005 8.25 9.903 8.25 11zm3.65 3.274c.46-.338 1.022-.797 1.475-1.321c.434-.502.875-1.183.875-1.953h-1.5c0 .215-.141.546-.51.972c-.348.403-.809.786-1.226 1.092zM15.75 11c0-1.097-.562-1.995-1.496-2.322c-.912-.32-1.948-.014-2.773.775l1.038 1.084c.525-.504.989-.532 1.24-.444c.228.08.491.331.491.907zm-5.15 3.274c.368.27.782.607 1.4.607v-1.5c-.024 0-.04 0-.094-.029a4 4 0 0 1-.42-.288zm1.914-1.21a4 4 0 0 1-.42.288c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.607z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h14"></svg:path></svg:g>`,
})
export class SolarChefHatHeartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartOutlineIcon],svg[solar-chef-hat-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.253 4.255a5.25 5.25 0 0 1 9.494 0A5.75 5.75 0 0 1 19.75 15.05v3.002c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-3.001A5.75 5.75 0 0 1 7.253 4.256m-.45 1.5A4.25 4.25 0 0 0 5.3 13.897a.75.75 0 0 1 .45.687v2.666h12.5v-2.666a.75.75 0 0 1 .45-.687a4.251 4.251 0 0 0-1.503-8.142q.053.365.053.745V7a.75.75 0 0 1-1.5 0v-.5A3.746 3.746 0 0 0 12 2.75A3.75 3.75 0 0 0 8.25 6.5V7a.75.75 0 0 1-1.5 0v-.5q0-.38.053-.745M18.248 18.75H5.752c.004.57.018 1 .065 1.345c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.046-.346.06-.776.064-1.345M14.254 8.678c.934.327 1.496 1.225 1.496 2.322c0 .77-.441 1.451-.875 1.953c-.453.524-1.014.983-1.474 1.32l-.07.053c-.352.26-.752.555-1.331.555c-.58 0-.98-.296-1.33-.555l-.07-.052c-.46-.338-1.022-.797-1.475-1.321C8.69 12.45 8.25 11.77 8.25 11c0-1.097.562-1.995 1.496-2.322c.729-.256 1.538-.112 2.254.36c.716-.472 1.525-.616 2.254-.36m-.496 1.415c-.25-.088-.714-.06-1.24.444a.75.75 0 0 1-1.037 0c-.525-.504-.989-.532-1.24-.444c-.228.08-.491.331-.491.907c0 .215.141.546.51.972c.348.403.809.786 1.226 1.092a4 4 0 0 0 .42.288c.054.029.07.03.094.03s.04-.001.094-.03a4 4 0 0 0 .42-.288c.417-.306.878-.69 1.227-1.092c.368-.426.509-.757.509-.972c0-.576-.263-.826-.492-.907" clip-rule="evenodd"></svg:path>`,
})
export class SolarChefHatHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatLineDuotoneIcon],svg[solar-chef-hat-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChefHatLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatLinearIcon],svg[solar-chef-hat-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h14"></svg:path></svg:g>`,
})
export class SolarChefHatLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticBoldIcon],svg[solar-chef-hat-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10a5 5 0 0 1 5.737-4.946a4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18v-3.416A5 5 0 0 1 2 10m7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChefHatMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticBoldDuotoneIcon],svg[solar-chef-hat-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a5 5 0 0 1 5.737-4.946a4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18v-3.416A5 5 0 0 1 2 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarChefHatMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticBrokenIcon],svg[solar-chef-hat-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6"></svg:path><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM14 21.25a.75.75 0 0 0 0 1.5zm-4 1.5a.75.75 0 0 0 0-1.5zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-8 15.5c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5zM15 21.25h-1v1.5h1zm-5 0H9v1.5h1z"></svg:path></svg:g>`,
})
export class SolarChefHatMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticLineDuotoneIcon],svg[solar-chef-hat-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChefHatMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticLinearIcon],svg[solar-chef-hat-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6"></svg:path></svg:g>`,
})
export class SolarChefHatMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticOutlineIcon],svg[solar-chef-hat-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.253 4.255a5.25 5.25 0 0 1 9.494 0A5.75 5.75 0 0 1 19.75 15.05v3.002c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-3.001A5.75 5.75 0 0 1 7.253 4.256m-.45 1.5A4.25 4.25 0 0 0 5.3 13.897a.75.75 0 0 1 .45.687V18c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-3.416a.75.75 0 0 1 .45-.687a4.251 4.251 0 0 0-1.503-8.142q.053.365.053.745V7a.75.75 0 0 1-1.5 0v-.5A3.746 3.746 0 0 0 12 2.75A3.75 3.75 0 0 0 8.25 6.5V7a.75.75 0 0 1-1.5 0v-.5q0-.38.053-.745M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChefHatMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatOutlineIcon],svg[solar-chef-hat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.253 4.255a5.25 5.25 0 0 1 9.494 0A5.75 5.75 0 0 1 19.75 15.05v3.002c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-3.001A5.75 5.75 0 0 1 7.253 4.256m-.45 1.5A4.25 4.25 0 0 0 5.3 13.897a.75.75 0 0 1 .45.687v2.666h12.5v-2.666a.75.75 0 0 1 .45-.687a4.251 4.251 0 0 0-1.503-8.142q.053.365.053.745V7a.75.75 0 0 1-1.5 0v-.5A3.746 3.746 0 0 0 12 2.75A3.75 3.75 0 0 0 8.25 6.5V7a.75.75 0 0 1-1.5 0v-.5q0-.38.053-.745M18.248 18.75H5.752c.004.57.018 1 .065 1.345c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.046-.346.06-.776.064-1.345" clip-rule="evenodd"></svg:path>`,
})
export class SolarChefHatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownBoldIcon],svg[solar-circle-bottom-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 14l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12q.001.9.154 1.755A2.25 2.25 0 0 1 4.25 16v.568l4.159-4.159a2.25 2.25 0 1 1 3.182 3.182L7.432 19.75H8a2.25 2.25 0 0 1 2.245 2.096Q11.1 22 12 22"></svg:path></svg:g>`,
})
export class SolarCircleBottomDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownBoldDuotoneIcon],svg[solar-circle-bottom-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCircleBottomDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownBrokenIcon],svg[solar-circle-bottom-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10 14l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"></svg:path></svg:g>`,
})
export class SolarCircleBottomDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownLineDuotoneIcon],svg[solar-circle-bottom-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10 14l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCircleBottomDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownLinearIcon],svg[solar-circle-bottom-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10 14l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path></svg:g>`,
})
export class SolarCircleBottomDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownOutlineIcon],svg[solar-circle-bottom-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25S1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0"></svg:path><svg:path fill="currentColor" d="M8 22.75a.75.75 0 0 0 0-1.5H3.81l6.72-6.72a.75.75 0 1 0-1.06-1.06l-6.72 6.72V16a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"></svg:path>`,
})
export class SolarCircleBottomDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpBoldIcon],svg[solar-circle-bottom-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.47 21.53a.75.75 0 0 1 0-1.06l7.72-7.72H6.655a.75.75 0 0 1 0-1.5H12a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V13.81l-7.72 7.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3.518 17.3l3.052-3.052a2.25 2.25 0 0 1 .086-4.498H12A2.25 2.25 0 0 1 14.25 12v5.344a2.25 2.25 0 0 1-4.498.086L6.7 20.482A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.947.556 3.763 1.518 5.3"></svg:path>`,
})
export class SolarCircleBottomUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpBoldDuotoneIcon],svg[solar-circle-bottom-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-4.19l-6.72 6.72a.75.75 0 0 1-1.06-1.06l6.72-6.72H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCircleBottomUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpBrokenIcon],svg[solar-circle-bottom-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"></svg:path></svg:g>`,
})
export class SolarCircleBottomUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpLineDuotoneIcon],svg[solar-circle-bottom-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCircleBottomUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpLinearIcon],svg[solar-circle-bottom-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path></svg:g>`,
})
export class SolarCircleBottomUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpOutlineIcon],svg[solar-circle-bottom-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25S1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0"></svg:path><svg:path fill="currentColor" d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarCircleBottomUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownBoldIcon],svg[solar-circle-top-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-7.72 7.72h3.534a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.656a.75.75 0 0 1 1.5 0v3.533l7.72-7.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.482 6.7L17.43 9.752a2.25 2.25 0 0 1-.086 4.498H12A2.25 2.25 0 0 1 9.75 12V6.656a2.25 2.25 0 0 1 4.498-.086L17.3 3.518A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a9.95 9.95 0 0 0-1.518-5.3"></svg:path>`,
})
export class SolarCircleTopDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownBoldDuotoneIcon],svg[solar-circle-top-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-7.72 7.72h3.534a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.656a.75.75 0 0 1 1.5 0v3.533l7.72-7.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCircleTopDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownBrokenIcon],svg[solar-circle-top-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m21 3l-9 9m0 0h5.344M12 12V6.656"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"></svg:path></svg:g>`,
})
export class SolarCircleTopDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownLineDuotoneIcon],svg[solar-circle-top-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m21 3l-9 9m0 0h5.344M12 12V6.656"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCircleTopDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownLinearIcon],svg[solar-circle-top-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m21 3l-9 9m0 0h5.344M12 12V6.656"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class SolarCircleTopDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownOutlineIcon],svg[solar-circle-top-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 12A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0"></svg:path><svg:path fill="currentColor" d="M21.53 3.53a.75.75 0 0 0-1.06-1.06l-7.72 7.72V6.655a.75.75 0 0 0-1.5 0V12c0 .414.336.75.75.75h5.344a.75.75 0 0 0 0-1.5H13.81z"></svg:path>`,
})
export class SolarCircleTopDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpBoldIcon],svg[solar-circle-top-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 2.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.56l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72h-4.19a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.25 2.75c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10q-.001-.9-.154-1.755A2.25 2.25 0 0 1 19 8.75v-.568l-4.159 4.159a2.25 2.25 0 1 1-3.182-3.182L15.818 5h-.568a2.25 2.25 0 0 1-2.245-2.096q-.856-.153-1.755-.154"></svg:path>`,
})
export class SolarCircleTopUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpBoldDuotoneIcon],svg[solar-circle-top-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.47 11.53a.75.75 0 0 1 0-1.06l7.72-7.72h-3.534a.75.75 0 0 1 0-1.5H22a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V3.81l-7.72 7.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCircleTopUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpBrokenIcon],svg[solar-circle-top-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13 11l9-9m0 0h-5.344M22 2v5.344"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"></svg:path></svg:g>`,
})
export class SolarCircleTopUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpLineDuotoneIcon],svg[solar-circle-top-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13 11l9-9m0 0h-5.344M22 2v5.344"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCircleTopUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpLinearIcon],svg[solar-circle-top-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13 11l9-9m0 0h-5.344M22 2v5.344"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class SolarCircleTopUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpOutlineIcon],svg[solar-circle-top-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 12A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0"></svg:path><svg:path fill="currentColor" d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l7.72-7.72v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0 0 1.5h3.533z"></svg:path>`,
})
export class SolarCircleTopUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityBoldIcon],svg[solar-city-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.707 4.793C9.414 4.5 8.943 4.5 8 4.5h-.25V3a.75.75 0 0 0-1.5 0v1.5H6c-.943 0-1.414 0-1.707.293S4 5.557 4 6.5v.204q.305-.078.606-.117C5.25 6.5 6.045 6.5 6.91 6.5h.179c.865 0 1.659 0 2.304.087q.302.038.606.117V6.5c0-.943 0-1.414-.293-1.707"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1V7.772c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V10.5h.09c.865 0 1.659 0 2.304.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.086.646.086 1.44.086 2.306v5.339H17V16c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v5.25H5.5v-5.34c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.072c-.04-.936-.165-1.51-.569-1.914C9.828 8 8.886 8 7 8s-2.828 0-3.414.586S3 10.114 3 12v9.25zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityBoldDuotoneIcon],svg[solar-city-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-5V16c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v5.25zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 4.5c.943 0 1.414 0 1.707.293S10 5.557 10 6.5v1.792q.234.114.414.294c.404.404.53.978.569 1.914V12c-1.874 0-2.813.002-3.397.586C7 13.172 7 14.114 7 16v5.25H3V12c0-1.886 0-2.828.586-3.414A1.5 1.5 0 0 1 4 8.292V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h.25V3a.75.75 0 0 1 1.5 0v1.5zm12.644.747c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12c1.886 0 2.828 0 3.414.586S17 14.114 17 16v5.25h4V7.772c0-1.34 0-2.011-.356-2.525" opacity=".5"></svg:path>`,
})
export class SolarCityBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityBrokenIcon],svg[solar-city-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3.75 18a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM7 8.75c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zM11.75 12c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM7 7.25c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM3.75 12c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294zm0 10v-4h-1.5v4zm0-8v-2h-1.5v2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 22v-6c0-1.886 0-2.828.586-3.414S9.114 12 11 12h2c1.886 0 2.828 0 3.414.586c.472.471.564 1.174.582 2.414M17 22v-2.75m4-11.478c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12m8 10V12M4 8V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293S10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h.5m3.5 0h-1.5M10 18h4"></svg:path></svg:g>`,
})
export class SolarCityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityLineDuotoneIcon],svg[solar-city-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 22v-6c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v6"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M21 22V7.772c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.25 8a.75.75 0 0 0 1.5 0zm6 0a.75.75 0 0 0 1.5 0zm.457-3.207l-.53.53zM6.25 4a.75.75 0 0 0 1.5 0zm1.5-2a.75.75 0 0 0-1.5 0zm-4 20V12h-1.5v10zM7 8.75c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zM11.75 12c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM7 7.25c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM3.75 12c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294zm1-4V6.5h-1.5V8zM6 5.25h2v-1.5H6zM9.25 6.5V8h1.5V6.5zM8 5.25c.493 0 .787.002.997.03a.7.7 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47C8.863 3.748 8.45 3.75 8 3.75zm2.75 1.25c0-.45.002-.863-.043-1.197c-.048-.356-.16-.731-.47-1.04l-1.06 1.06l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997zm-6 0c0-.493.002-.787.03-.997a.7.7 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04c-.045.334-.043.747-.043 1.197zM6 3.75c-.45 0-.863-.002-1.197.043c-.356.048-.731.16-1.04.47l1.06 1.06l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03zM7.75 4V2h-1.5v2z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h4m-4 3h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityLinearIcon],svg[solar-city-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 22V12c0-1.886 0-2.828.586-3.414S5.114 8 7 8s2.828 0 3.414.586S11 10.114 11 12"></svg:path><svg:path d="M17 22v-6c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v6"></svg:path><svg:path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"></svg:path><svg:path stroke-linecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293S10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4"></svg:path></svg:g>`,
})
export class SolarCityLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityOutlineIcon],svg[solar-city-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.25a.75.75 0 0 1 .75.75v1.75h.295c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v1.427q.1.079.194.173c.456.456.642 1.023.726 1.65c.058.434.074.95.078 1.545h.502V7.71c0-1.258 0-2.287.116-3.072c.12-.814.387-1.54 1.068-2.012c.68-.472 1.455-.467 2.259-.294c.775.168 1.739.529 2.917.97l.096.037c.595.223 1.1.412 1.495.613c.42.214.785.472 1.06.868c.274.396.388.827.44 1.296c.049.441.049.98.049 1.616V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-9.302c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65q.095-.095.195-.174V6.455c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043h.295V2A.75.75 0 0 1 7 1.25M4.75 7.324c.588-.074 1.322-.074 2.198-.074h.104c.876 0 1.61 0 2.198.074V6.5c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03H6c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997zm-1 13.926h2.5v-5.302c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.434-.058.948-.074 1.543-.078c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3C8.613 8.753 7.965 8.75 7 8.75s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095zm4 0h8.5V16c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.066c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094zm10 0h2.5V7.772c0-.687-.001-1.141-.04-1.49c-.037-.33-.1-.49-.183-.608c-.081-.118-.21-.235-.505-.385c-.313-.158-.737-.319-1.38-.56c-1.251-.469-2.11-.79-2.765-.93c-.64-.138-.909-.065-1.089.06c-.18.124-.343.351-.438.998c-.098.662-.1 1.58-.1 2.915v3.48c.595.004 1.111.02 1.544.078c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCityOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardBoldIcon],svg[solar-clapperboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.096 2.004c-3.474.027-5.38.208-6.632 1.46c-.857.858-1.213 2.022-1.36 3.786H6.6zM2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25zm19.87-1.5c-.147-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.337-1.16L14.9 7.25zM16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1z"></svg:path>`,
})
export class SolarClapperboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardBoldDuotoneIcon],svg[solar-clapperboard-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.096 2.004c-3.474.027-5.38.208-6.632 1.46c-.857.858-1.213 2.022-1.36 3.786h4.494zm11.8 5.246c-.148-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.338-1.16L14.901 7.25zM16.54 2.088C15.33 2 13.845 2 12 2h-.1L8.4 7.25h4.697z"></svg:path><svg:path fill="currentColor" d="M2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25z" opacity=".5"></svg:path>`,
})
export class SolarClapperboardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardBrokenIcon],svg[solar-clapperboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8m8.5 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarClapperboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditBoldIcon],svg[solar-clapperboard-edit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.845 0 3.33 0 4.54.088L13.1 7.25H8.4L11.9 2zM3.464 3.464c1.253-1.252 3.158-1.433 6.632-1.46L6.599 7.25H2.104c.147-1.764.503-2.928 1.36-3.786M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12v.258c-.567-.405-1.205-.578-1.831-.662c-.714-.096-1.595-.096-2.577-.096h-.184c-.982 0-1.863 0-2.577.096c-.779.104-1.578.348-2.233 1.002c-.654.655-.898 1.454-1.002 2.233c-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577c.084.626.257 1.264.662 1.831H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.896-4.75c-.147-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.337-1.16L14.9 7.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 22c-2.121 0-3.182 0-3.841-.659S13 19.621 13 17.5s0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067a1.6 1.6 0 0 1-.81-.436a1.6 1.6 0 0 1-.436-.81a.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 19.04a3 3 0 0 1-.296.279a1.6 1.6 0 0 1-.303.187a3 3 0 0 1-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardEditBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditBoldDuotoneIcon],svg[solar-clapperboard-edit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.845 0 3.33 0 4.54.088L13.1 7.25H8.402l3.5-5.25zM3.465 3.464c1.252-1.252 3.157-1.433 6.631-1.46L6.599 7.25H2.104c.148-1.764.503-2.928 1.36-3.786M21.896 7.25c-.147-1.764-.503-2.928-1.36-3.786c-.598-.597-1.343-.95-2.337-1.16L14.902 7.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 22c-2.121 0-3.182 0-3.841-.659S13 19.621 13 17.5s0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067a1.6 1.6 0 0 1-.81-.436a1.6 1.6 0 0 1-.436-.81a.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 19.04a3 3 0 0 1-.296.279a1.6 1.6 0 0 1-.303.187a3 3 0 0 1-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c1.358 0 2.52 0 3.522-.035c-.884-.058-1.452-.213-1.863-.624C13 20.682 13 19.621 13 17.5s0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659c.411.411.566.979.624 1.863C22 14.52 22 13.358 22 12c0-1.237 0-2.311-.026-3.25z" opacity=".5"></svg:path>`,
})
export class SolarClapperboardEditBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditBrokenIcon],svg[solar-clapperboard-edit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 21.995c-3.413-.03-5.295-.219-6.536-1.46C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path fill="currentColor" d="M2.5 7.25a.75.75 0 0 0 0 1.5zm19.5 0H2.5v1.5H22z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 2.5L7 8m10-5.5L13.5 8"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503l-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116l-.12.36m7.92-4.572l-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372l-.36.12m0 0l-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844l-.844-.844"></svg:path></svg:g>`,
})
export class SolarClapperboardEditBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditLineDuotoneIcon],svg[solar-clapperboard-edit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21.998 10.5c-.016-3.732-.162-5.735-1.463-7.036C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c1.241 1.241 3.123 1.43 6.536 1.46"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5" opacity=".5"></svg:path><svg:path d="m18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503l-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116l-.12.36m7.92-4.572l-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372l-.36.12m0 0l-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844l-.844-.844"></svg:path></svg:g>`,
})
export class SolarClapperboardEditLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditLinearIcon],svg[solar-clapperboard-edit-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21.998 10.5c-.016-3.732-.162-5.735-1.463-7.036C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c1.241 1.241 3.123 1.43 6.536 1.46M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8"></svg:path><svg:path d="m18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503l-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116l-.12.36m7.92-4.572l-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372l-.36.12m0 0l-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844l-.844-.844"></svg:path></svg:g>`,
})
export class SolarClapperboardEditLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditOutlineIcon],svg[solar-clapperboard-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.793.793 1.203 1.78 1.42 3.005c.215 1.203.254 2.7.262 4.558a.75.75 0 0 1-1.5.006a73 73 0 0 0-.025-1.753H2.777A121 121 0 0 0 2.75 12c0 2.378.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.484.484 1.112.79 2.067.978c.976.19 2.235.246 3.944.26a.75.75 0 1 1-.012 1.5c-1.704-.014-3.092-.067-4.22-.288c-1.15-.226-2.084-.634-2.84-1.39c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-9.086 6h3.731l2.856-4.488c-1.127.017-2.052.06-2.83.164c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619q-.04.302-.07.636m8.35-4.5a1 1 0 0 1-.074.153L8.366 7.25h4.722l2.83-4.448C14.857 2.75 13.576 2.75 12 2.75zm6.391.207L14.866 7.25h6.277q-.049-.572-.133-1.048c-.184-1.036-.498-1.7-1.005-2.207c-.537-.538-1.254-.86-2.407-1.038m.85 10.031a2.52 2.52 0 1 1 3.564 3.563l-4.282 4.282a6 6 0 0 1-.572.532a3.7 3.7 0 0 1-.683.423c-.206.098-.422.17-.732.273l-1.878.626a1.227 1.227 0 0 1-1.552-1.552l.626-1.878c.103-.31.175-.526.273-.732q.175-.365.423-.683c.14-.18.301-.341.532-.572zm2.503 1.06a1.02 1.02 0 0 0-1.442 0l-.131.132l.016.05c.082.236.238.548.533.843a2.2 2.2 0 0 0 .893.55l.131-.132a1.02 1.02 0 0 0 0-1.442m-1.265 2.708a3.76 3.76 0 0 1-1.442-1.442L15.258 18.3c-.272.273-.364.366-.44.464a2.2 2.2 0 0 0-.252.406c-.053.113-.096.236-.218.601l-.345 1.037l.189.19l1.037-.347c.365-.121.488-.164.6-.217q.218-.104.407-.252c.098-.076.191-.168.464-.44z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardLineDuotoneIcon],svg[solar-clapperboard-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClapperboardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardLinearIcon],svg[solar-clapperboard-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8"></svg:path></svg:g>`,
})
export class SolarClapperboardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenBoldIcon],svg[solar-clapperboard-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zm9.918-7.834L9.15 4.444a.8.8 0 0 1 .017.269l-.604 5.064l4.779-1.28a.8.8 0 0 1-.024-.297zm.923 4.929l3.408-.913c.224-.06.336-.09.425-.134a1 1 0 0 0 .555-.962c-.006-.098-.036-.21-.096-.435c-.18-.673-.271-1.01-.402-1.275a3 3 0 0 0-2.887-1.666a3 3 0 0 0-.413.062q.03.125.014.258zM7.063 10.18a.8.8 0 0 1-.023-.298l.6-5.034l-.103.028C5.73 5.36 4.829 5.602 4.26 6.17a3 3 0 0 0-.776 1.345C3.276 8.29 3.517 9.195 4 11z"></svg:path>`,
})
export class SolarClapperboardOpenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenBoldDuotoneIcon],svg[solar-clapperboard-open-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.318 8.2l.6-5.034l-4.71 1.262l-.042.285l-.604 5.064l4.719-1.264zm-9.835-.685c-.208.776.034 1.68.518 3.485L7 10.196l.039-.314l.6-5.034l-.103.028c-1.805.484-2.708.726-3.276 1.294a3 3 0 0 0-.777 1.345m14.765-.333l-3.407.913l.604-5.065l.055-.272a3 3 0 0 1 .344-.048a3 3 0 0 1 2.887 1.666c.13.265.22.602.401 1.275c.06.225.09.337.097.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134"></svg:path>`,
})
export class SolarClapperboardOpenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenBrokenIcon],svg[solar-clapperboard-open-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 16c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16v-5h12c1.886 0 2.828 0 3.414.586c.336.336.48.789.54 1.47"></svg:path><svg:path d="M4.002 11c-.484-1.806-.726-2.709-.518-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.472-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275c.06.225.091.337.098.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenLineDuotoneIcon],svg[solar-clapperboard-open-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zm.002 0c-.484-1.806-.726-2.709-.518-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.472-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275c.06.225.091.337.098.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenLinearIcon],svg[solar-clapperboard-open-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zm.001 0c-.484-1.806-.725-2.709-.517-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.471-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.886 1.667c.131.265.221.602.402 1.275c.06.225.09.337.096.435a1 1 0 0 1-.555.962c-.089.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenOutlineIcon],svg[solar-clapperboard-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.059 4.708a2.25 2.25 0 0 0-2.166-1.25a3 3 0 0 0-.51.096l-.446 3.74l3.118-.836a8 8 0 0 0 .289-.083a.25.25 0 0 0 .137-.238l-.01-.052l-.063-.24c-.19-.708-.26-.955-.35-1.137m-4.683 3.003l.447-3.743l-4.719 1.264l-.446 3.743zM7.098 9.394l.446-3.743c-.817.219-1.401.379-1.85.544c-.474.174-.728.33-.904.505c-.279.28-.48.628-.582 1.009c-.064.24-.072.537.014 1.034c.063.362.167.79.31 1.338zM3.25 11.093c-.226-.843-.408-1.526-.506-2.094c-.104-.6-.129-1.141.015-1.678a3.75 3.75 0 0 1 .97-1.681c.394-.393.875-.643 1.447-.853c.554-.203 1.259-.392 2.132-.626l.78-.21a.8.8 0 0 1 .286-.076l5.972-1.6l.021-.006a.8.8 0 0 1 .286-.076c.474-.126.821-.21 1.142-.232a3.75 3.75 0 0 1 3.609 2.084c.164.332.272.736.43 1.328l.023.084l.012.046c.048.176.097.359.109.534a1.75 1.75 0 0 1-.973 1.684a3 3 0 0 1-.562.186L9.697 10.25h6.355c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v1.107c0 1.367 0 2.47-.117 3.337c-.12.9-.38 1.658-.982 2.26s-1.36.86-2.26.981c-.866.117-1.969.117-3.336.117h-4.11c-1.368 0-2.47 0-3.337-.117c-.9-.12-1.658-.38-2.26-.981c-.602-.602-.86-1.36-.982-2.26c-.116-.867-.116-1.97-.116-3.337zm1.5.657V16c0 1.435.001 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.399.556c.755.101 1.756.103 3.192.103h4c1.435 0 2.436-.002 3.192-.103c.733-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-1c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.789-.3c-.483-.065-1.13-.066-2.094-.066z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayBoldIcon],svg[solar-clapperboard-open-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.841 8.095l3.408-.913c.224-.06.336-.09.425-.134a1 1 0 0 0 .555-.962c-.006-.098-.036-.21-.096-.435c-.18-.673-.271-1.01-.402-1.275a3 3 0 0 0-2.887-1.666a3 3 0 0 0-.413.062q.03.125.014.258zM9.15 4.444l4.768-1.278l-.6 5.034a.8.8 0 0 0 .024.297l-4.78 1.28l.605-5.064a.8.8 0 0 0-.017-.27"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 11H4v5c0 2.828 0 4.243.879 5.121C5.757 22 7.172 22 10 22h4c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-1c0-1.886 0-2.828-.586-3.414S17.886 11 16 11m-3.192 4.224c.795.569 1.192.854 1.192 1.276s-.397.707-1.192 1.276c-.805.578-1.207.866-1.508.654s-.3-.784-.3-1.93s0-1.719.3-1.93c.3-.213.703.076 1.508.653" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.04 9.882a.8.8 0 0 0 .023.297L4.001 11c-.484-1.805-.725-2.708-.517-3.484A3 3 0 0 1 4.26 6.17c.569-.568 1.471-.81 3.277-1.294l.103-.028z"></svg:path>`,
})
export class SolarClapperboardOpenPlayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayBoldDuotoneIcon],svg[solar-clapperboard-open-play-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 11H4v5c0 2.828 0 4.243.879 5.121C5.757 22 7.172 22 10 22h4c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-1c0-1.886 0-2.828-.586-3.414S17.886 11 16 11" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 16.5c0-.422-.397-.707-1.192-1.277c-.805-.577-1.207-.866-1.508-.654s-.3.785-.3 1.931s0 1.719.3 1.93c.3.212.703-.076 1.508-.654c.795-.569 1.192-.854 1.192-1.276m-.682-8.3l.6-5.034l-4.71 1.262l-.042.285l-.604 5.064l4.719-1.264zm-9.835-.685c-.208.776.034 1.68.518 3.485L7 10.196l.039-.314l.6-5.034l-.103.028c-1.805.484-2.708.726-3.276 1.294a3 3 0 0 0-.777 1.345m14.765-.333l-3.407.913l.604-5.065l.055-.272a3 3 0 0 1 .344-.048a3 3 0 0 1 2.887 1.666c.13.265.22.602.401 1.275c.06.225.09.337.097.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134"></svg:path>`,
})
export class SolarClapperboardOpenPlayBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayBrokenIcon],svg[solar-clapperboard-open-play-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.002 11c-.484-1.806-.726-2.709-.518-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.472-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275c.06.225.091.337.098.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347M14 16.5c0-.422-.397-.707-1.192-1.277c-.805-.577-1.207-.866-1.508-.654s-.3.785-.3 1.931s0 1.719.3 1.93c.3.212.703-.076 1.508-.654c.795-.569 1.192-.854 1.192-1.276Z"></svg:path><svg:path stroke-linecap="round" d="M20 16c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16v-5h12c1.886 0 2.828 0 3.414.586c.336.336.48.789.54 1.47"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenPlayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayLineDuotoneIcon],svg[solar-clapperboard-open-play-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zm.002 0c-.484-1.806-.726-2.709-.518-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.472-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275c.06.225.091.337.098.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347M14 16.5c0-.422-.397-.707-1.192-1.277c-.805-.577-1.207-.866-1.508-.654s-.3.785-.3 1.931s0 1.719.3 1.93c.3.212.703-.076 1.508-.654c.795-.569 1.192-.854 1.192-1.276Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenPlayLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayLinearIcon],svg[solar-clapperboard-open-play-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zm.001 0c-.484-1.806-.725-2.709-.517-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.471-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.886 1.667c.131.265.221.602.402 1.275c.06.225.09.337.096.435a1 1 0 0 1-.555.962c-.089.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347M14 16.5c0-.422-.397-.707-1.192-1.277c-.805-.577-1.207-.866-1.508-.654s-.3.785-.3 1.931s0 1.719.3 1.93c.3.212.703-.076 1.508-.654c.795-.569 1.192-.854 1.192-1.276Z"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenPlayLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayOutlineIcon],svg[solar-clapperboard-open-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.059 4.708a2.25 2.25 0 0 0-2.166-1.25a3 3 0 0 0-.51.096l-.446 3.74l3.118-.836a8 8 0 0 0 .289-.083a.25.25 0 0 0 .137-.238l-.01-.052l-.063-.24c-.19-.708-.26-.955-.35-1.137m-4.683 3.003l.447-3.743l-4.719 1.264l-.446 3.743zM7.098 9.394l.446-3.743c-.817.219-1.401.379-1.85.544c-.474.174-.728.33-.904.505c-.279.28-.48.628-.582 1.009c-.064.24-.072.537.014 1.034c.063.362.167.79.31 1.338zM3.25 11.093c-.226-.843-.408-1.526-.506-2.094c-.104-.6-.129-1.141.015-1.678a3.75 3.75 0 0 1 .97-1.681c.394-.393.875-.643 1.447-.853c.554-.203 1.259-.392 2.132-.626l.78-.21a.8.8 0 0 1 .286-.076l5.972-1.6l.021-.006a.8.8 0 0 1 .286-.076c.474-.126.821-.21 1.142-.232a3.75 3.75 0 0 1 3.609 2.084c.164.332.272.736.43 1.328l.023.084l.012.046c.048.176.097.359.109.534a1.75 1.75 0 0 1-.973 1.684a3 3 0 0 1-.562.186L9.697 10.25h6.355c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v1.107c0 1.367 0 2.47-.117 3.337c-.12.9-.38 1.658-.982 2.26s-1.36.86-2.26.981c-.866.117-1.969.117-3.336.117h-4.11c-1.368 0-2.47 0-3.337-.117c-.9-.12-1.658-.38-2.26-.981c-.602-.602-.86-1.36-.982-2.26c-.116-.867-.116-1.97-.116-3.337zm1.5.657V16c0 1.435.001 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.399.556c.755.101 1.756.103 3.192.103h4c1.435 0 2.436-.002 3.192-.103c.733-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-1c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.789-.3c-.483-.065-1.13-.066-2.094-.066zm8.448 2.83l.047.034l.042.03c.361.259.7.501.94.738c.27.265.523.623.523 1.118s-.252.852-.522 1.118c-.241.237-.58.48-.94.738l-.043.03l-.047.034c-.361.26-.706.506-1.001.652c-.315.155-.834.321-1.33-.029c-.43-.304-.533-.795-.574-1.138c-.043-.358-.043-.826-.043-1.358v-.094c0-.533 0-1 .043-1.358c.04-.343.144-.834.575-1.138c.495-.35 1.014-.185 1.329-.03c.295.146.64.394 1.001.653m-1.429.832c-.018.25-.02.593-.02 1.088s.002.838.02 1.088c.149-.097.34-.234.602-.421c.418-.3.658-.474.805-.619q.03-.028.046-.048l-.046-.048c-.147-.145-.387-.32-.805-.619a18 18 0 0 0-.602-.421" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardOpenPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOutlineIcon],svg[solar-clapperboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619q-.04.302-.07.636h3.732l2.856-4.488c-1.127.017-2.052.06-2.83.164m4.594-.176a1 1 0 0 1-.074.153L8.366 7.25h4.722l2.83-4.448C14.857 2.75 13.576 2.75 12 2.75zm6.391.207L14.866 7.25h6.277q-.029-.334-.07-.636c-.171-1.279-.498-2.05-1.068-2.62c-.537-.537-1.254-.858-2.407-1.037m3.625 5.793H2.777A121 121 0 0 0 2.75 12c0 2.378.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386c0-1.258 0-2.328-.027-3.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayBoldIcon],svg[solar-clapperboard-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.845 0 3.33 0 4.54.088L13.1 7.25H8.4L11.9 2zM3.464 3.464c1.253-1.252 3.158-1.433 6.632-1.46L6.599 7.25H2.104c.147-1.764.503-2.928 1.36-3.786"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m11.014.585C14.338 13.44 15 13.867 15 14.5s-.662 1.06-1.986 1.915c-1.342.866-2.013 1.299-2.514.98c-.5-.317-.5-1.176-.5-2.895s0-2.578.5-2.896s1.172.115 2.514.981" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.896 7.25c-.147-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.337-1.16L14.9 7.25z"></svg:path>`,
})
export class SolarClapperboardPlayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayBoldDuotoneIcon],svg[solar-clapperboard-play-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 14.5c0-.633-.662-1.06-1.986-1.915c-1.342-.866-2.013-1.299-2.514-.98c-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896s1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5M12 2c1.845 0 3.33 0 4.54.088L13.098 7.25H8.401l3.5-5.25zM3.464 3.464c1.253-1.252 3.158-1.433 6.631-1.46L6.599 7.25H2.104c.147-1.764.503-2.928 1.36-3.786M21.896 7.25c-.148-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.338-1.16L14.901 7.25z"></svg:path>`,
})
export class SolarClapperboardPlayBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayBrokenIcon],svg[solar-clapperboard-play-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2.5 7.25a.75.75 0 0 0 0 1.5zm19.5 0H2.5v1.5H22z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 2.5L7 8m10-5.5L13.5 8m1.5 6.5c0-.633-.662-1.06-1.986-1.915c-1.342-.866-2.013-1.299-2.514-.98c-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896s1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarClapperboardPlayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayLineDuotoneIcon],svg[solar-clapperboard-play-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5m-2 12c0-.633-.662-1.06-1.986-1.915c-1.342-.866-2.013-1.299-2.514-.98c-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896s1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClapperboardPlayLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayLinearIcon],svg[solar-clapperboard-play-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8m1.5 6.5c0-.633-.662-1.06-1.986-1.915c-1.342-.866-2.013-1.299-2.514-.98c-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896s1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z"></svg:path></svg:g>`,
})
export class SolarClapperboardPlayLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayOutlineIcon],svg[solar-clapperboard-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619q-.04.302-.07.636h3.732l2.856-4.488c-1.127.017-2.052.06-2.83.164m4.594-.176a1 1 0 0 1-.074.153L8.366 7.25h4.722l2.83-4.448C14.857 2.75 13.576 2.75 12 2.75zm6.391.207L14.866 7.25h6.277q-.029-.334-.07-.636c-.171-1.279-.498-2.05-1.068-2.62c-.537-.537-1.254-.858-2.407-1.037m3.625 5.793H2.777A121 121 0 0 0 2.75 12c0 2.378.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386c0-1.258 0-2.328-.027-3.25m-7.855 3.171l.102.066c.62.4 1.156.746 1.53 1.077c.398.352.75.805.75 1.436s-.352 1.084-.75 1.436c-.374.331-.91.677-1.53 1.077l-.102.066c-.626.404-1.17.755-1.622.956c-.47.209-1.073.359-1.648-.006c-.544-.346-.71-.937-.779-1.457c-.07-.519-.069-1.205-.069-2.017v-.11c0-.812 0-1.498.07-2.017c.068-.52.234-1.11.778-1.457c.575-.365 1.178-.214 1.648-.006c.452.201.996.552 1.622.956m-2.51.33h.016q-.016.003-.016 0m.04.002c.04.007.114.028.24.083c.33.147.775.432 1.47.88c.683.44 1.12.725 1.399.971c.256.227.244.306.243.313c.001.006.013.086-.243.313c-.278.246-.716.53-1.4.972c-.694.447-1.138.732-1.47.879c-.125.055-.2.076-.24.083c-.022-.043-.06-.146-.091-.373c-.054-.408-.056-.992-.056-1.874s.002-1.466.056-1.874c.03-.227.069-.33.091-.373m-.04 4.495l.016.002q-.018 0-.016-.002m.052.02l.005.005zm0-4.536l.005-.005z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextBoldIcon],svg[solar-clapperboard-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1zm-6.444-.084c-3.474.027-5.38.208-6.632 1.46c-.857.858-1.213 2.022-1.36 3.786H6.6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25zM5.75 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.536 3.464c.857.858 1.213 2.022 1.36 3.786H14.9l3.3-4.946c.993.21 1.74.563 2.336 1.16"></svg:path>`,
})
export class SolarClapperboardTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextBoldDuotoneIcon],svg[solar-clapperboard-text-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.54 2.088C15.33 2 13.846 2 12 2h-.098l-3.5 5.25h4.697zm-6.444-.084c-3.474.027-5.379.208-6.631 1.46c-.858.858-1.213 2.022-1.36 3.786h4.494zm10.44 1.46c.857.858 1.213 2.022 1.36 3.786h-6.994l3.297-4.946c.994.21 1.74.563 2.337 1.16"></svg:path><svg:path fill="currentColor" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.75 17.5a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75m.75-4.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarClapperboardTextBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextBrokenIcon],svg[solar-clapperboard-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8m-7 6h8m-8 3.5H12M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarClapperboardTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextLineDuotoneIcon],svg[solar-clapperboard-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5M6.5 14h8m-8 3.5H12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClapperboardTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextLinearIcon],svg[solar-clapperboard-text-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8m-7 6h8m-8 3.5H12"></svg:path></svg:g>`,
})
export class SolarClapperboardTextLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextOutlineIcon],svg[solar-clapperboard-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619q-.04.302-.07.636h3.732l2.856-4.488c-1.127.017-2.052.06-2.83.164m4.594-.176a1 1 0 0 1-.074.153L8.366 7.25h4.722l2.83-4.448C14.857 2.75 13.576 2.75 12 2.75zm6.391.207L14.866 7.25h6.277q-.029-.334-.07-.636c-.171-1.279-.498-2.05-1.068-2.62c-.537-.537-1.254-.858-2.407-1.037m3.625 5.793H2.777A121 121 0 0 0 2.75 12c0 2.378.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386c0-1.258 0-2.328-.027-3.25M5.75 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddBoldIcon],svg[solar-clipboard-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.879 4.877c.569-.57 1.363-.77 2.621-.84V4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-.463c1.258.07 2.052.27 2.621.84C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddBoldDuotoneIcon],svg[solar-clipboard-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddBrokenIcon],svg[solar-clipboard-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3m9 0c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddLineDuotoneIcon],svg[solar-clipboard-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" opacity=".5"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarClipboardAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddLinearIcon],svg[solar-clipboard-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarClipboardAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddOutlineIcon],svg[solar-clipboard-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.263 3.259A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.009c.763.015 1.423.055 1.987.158c.758.14 1.403.405 1.928.93c.602.602.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.368 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.336c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.93c.564-.103 1.224-.143 1.987-.158m.002 1.5c-.718.015-1.272.052-1.718.134c-.566.104-.895.27-1.138.514c-.277.277-.457.666-.556 1.4c-.101.755-.103 1.756-.103 3.191v6c0 1.436.002 2.437.103 3.192c.099.734.28 1.122.556 1.4c.277.276.665.457 1.4.555c.754.102 1.756.103 3.191.103h6c1.435 0 2.436-.001 3.192-.103c.734-.098 1.122-.279 1.399-.556c.277-.276.457-.665.556-1.399c.101-.755.103-1.756.103-3.192v-6c0-1.435-.002-2.436-.103-3.192c-.099-.733-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.514c-.446-.082-1-.119-1.718-.134A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zm2.5 6.5a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardBoldIcon],svg[solar-clipboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM6.25 10.5A.75.75 0 0 1 7 9.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardBoldDuotoneIcon],svg[solar-clipboard-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 10.5A.75.75 0 0 1 7 9.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardBrokenIcon],svg[solar-clipboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9M9 17.5h6"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M8 14h1m7 0h-4m5-3.5h-2m-3 0H7"></svg:path></svg:g>`,
})
export class SolarClipboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckBoldIcon],svg[solar-clipboard-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm9.012 8.511a.75.75 0 1 0-1.024-1.096l-3.774 3.522l-1.202-1.122a.75.75 0 0 0-1.024 1.096l1.715 1.6a.75.75 0 0 0 1.023 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckBoldDuotoneIcon],svg[solar-clipboard-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.548 10.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.024 0l-1.714-1.6a.75.75 0 1 1 1.024-1.096l1.202 1.122l3.774-3.522a.75.75 0 0 1 1.06.036" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckBrokenIcon],svg[solar-clipboard-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 13.4l1.714 1.6L15 11"></svg:path><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckLineDuotoneIcon],svg[solar-clipboard-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 13.4l1.714 1.6L15 11"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckLinearIcon],svg[solar-clipboard-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 13.4l1.714 1.6L15 11"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckOutlineIcon],svg[solar-clipboard-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.263 3.259A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.009c.763.015 1.423.055 1.987.158c.758.14 1.403.405 1.928.93c.602.602.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.368 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.336c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.93c.564-.103 1.224-.143 1.987-.158m.002 1.5c-.718.015-1.272.052-1.718.134c-.566.104-.895.27-1.138.514c-.277.277-.457.666-.556 1.4c-.101.755-.103 1.756-.103 3.191v6c0 1.436.002 2.437.103 3.192c.099.734.28 1.122.556 1.4c.277.276.665.457 1.4.555c.754.102 1.756.103 3.191.103h6c1.435 0 2.436-.001 3.192-.103c.734-.098 1.122-.279 1.399-.556c.277-.276.457-.665.556-1.399c.101-.755.103-1.756.103-3.192v-6c0-1.435-.002-2.436-.103-3.192c-.099-.733-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.514c-.446-.082-1-.119-1.718-.134A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zm6.048 7.738a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.024 0l-1.714-1.6a.75.75 0 1 1 1.024-1.096l1.202 1.122l3.774-3.522a.75.75 0 0 1 1.06.036" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartBoldIcon],svg[solar-clipboard-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm4.543 11.329C10.165 14.72 9 13.68 9 12.696c0-1.672 1.65-2.297 3-1.005c1.35-1.292 3-.668 3 1.006c0 .984-1.165 2.024-2.043 2.669c-.42.308-.63.462-.957.462c-.328 0-.537-.154-.957-.462" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartBoldDuotoneIcon],svg[solar-clipboard-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5zm1 9.197c0 .984 1.165 2.024 2.043 2.669c.42.308.63.462.957.462c.328 0 .537-.154.957-.462c.878-.645 2.043-1.685 2.043-2.67c0-1.672-1.65-2.297-3-1.005c-1.35-1.292-3-.668-3 1.006"></svg:path>`,
})
export class SolarClipboardHeartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartBrokenIcon],svg[solar-clipboard-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 11.691l-.519.542a.75.75 0 0 0 1.038 0zm0 4.137v-.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM9.75 12.697c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartLineDuotoneIcon],svg[solar-clipboard-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12 11.691l-.519.542a.75.75 0 0 0 1.038 0zm0 4.137v-.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM9.75 12.697c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartLinearIcon],svg[solar-clipboard-heart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4"></svg:path><svg:path fill="currentColor" d="m12 11.691l-.519.542a.75.75 0 0 0 1.038 0zm0 4.137v-.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM9.75 12.697c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardHeartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartOutlineIcon],svg[solar-clipboard-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.263 3.259A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.009c.763.015 1.423.055 1.987.158c.758.14 1.403.405 1.928.93c.602.602.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.368 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.336c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.93c.564-.103 1.224-.143 1.987-.158m.002 1.5c-.718.015-1.272.052-1.718.134c-.566.104-.895.27-1.138.514c-.277.277-.457.666-.556 1.4c-.101.755-.103 1.756-.103 3.191v6c0 1.436.002 2.437.103 3.192c.099.734.28 1.122.556 1.4c.277.276.665.457 1.4.555c.754.102 1.756.103 3.191.103h6c1.435 0 2.436-.001 3.192-.103c.734-.098 1.122-.279 1.399-.556c.277-.276.457-.665.556-1.399c.101-.755.103-1.756.103-3.192v-6c0-1.435-.002-2.436-.103-3.192c-.099-.733-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.514c-.446-.082-1-.119-1.718-.134A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zm.742 9.04c-.23.08-.492.33-.492.907c0 .214.141.545.51.971c.348.403.809.786 1.226 1.093a4 4 0 0 0 .42.288c.054.029.07.029.094.029s.04 0 .094-.03a4 4 0 0 0 .42-.287c.417-.307.878-.69 1.227-1.093c.368-.426.509-.757.509-.971c0-.576-.263-.827-.492-.907c-.25-.088-.714-.06-1.24.443a.75.75 0 0 1-1.037 0c-.525-.503-.989-.531-1.24-.443M12 10.734c-.716-.471-1.525-.616-2.254-.36c-.934.327-1.496 1.226-1.496 2.323c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321l.07.052c.352.26.752.556 1.331.556c.58 0 .98-.296 1.33-.556l.07-.052c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953c0-1.097-.562-1.996-1.496-2.323c-.729-.256-1.538-.111-2.254.36" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardLineDuotoneIcon],svg[solar-clipboard-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 14h8m-9-3.5h10m-8 7h6"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardLinearIcon],svg[solar-clipboard-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"></svg:path><svg:path stroke-linecap="round" d="M8 14h8m-9-3.5h10m-8 7h6"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListBoldIcon],svg[solar-clipboard-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM7 9.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 16.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListBoldDuotoneIcon],svg[solar-clipboard-list-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 10.5A.75.75 0 0 1 7 9.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 14a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardListBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListBrokenIcon],svg[solar-clipboard-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10.5 14H17M7 14h.5M7 10.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListLineDuotoneIcon],svg[solar-clipboard-list-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10.5 14H17M7 14h.5M7 10.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardListLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListLinearIcon],svg[solar-clipboard-list-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"></svg:path><svg:path stroke-linecap="round" d="M10.5 14H17M7 14h.5M7 10.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardListLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListOutlineIcon],svg[solar-clipboard-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.263 3.26A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.01c.764.016 1.423.055 1.987.159c.758.14 1.403.404 1.928.93c.602.601.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.929c.564-.104 1.224-.143 1.987-.159m.002 1.5c-.718.016-1.272.052-1.718.134c-.566.104-.895.272-1.138.515c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191v6c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-6c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.515c-.446-.082-1-.118-1.718-.133A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zM6.25 10.5A.75.75 0 0 1 7 9.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 14a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardOutlineIcon],svg[solar-clipboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.263 3.26A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.01c.764.016 1.423.055 1.987.159c.758.14 1.403.404 1.928.93c.602.601.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.929c.564-.104 1.224-.143 1.987-.159m.002 1.5c-.718.016-1.272.052-1.718.134c-.566.104-.895.272-1.138.515c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191v6c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-6c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.515c-.446-.082-1-.118-1.718-.133A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zM6.25 10.5A.75.75 0 0 1 7 9.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveBoldIcon],svg[solar-clipboard-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.879 4.877c.569-.57 1.363-.77 2.621-.84V4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-.463c1.258.07 2.052.27 2.621.84C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121M12 13.439l-1.97-1.97a.75.75 0 1 0-1.06 1.061l1.97 1.97l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 15.56l1.97 1.97a.75.75 0 0 0 1.06-1.06l-1.97-1.97l1.97-1.97a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveBoldDuotoneIcon],svg[solar-clipboard-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.97 10.47a.75.75 0 0 1 1.06 0L12 12.44l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 14.56l-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveBrokenIcon],svg[solar-clipboard-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="m14.5 11l-5 5m0-5l5 5m6.5 0c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveLineDuotoneIcon],svg[solar-clipboard-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" opacity=".5"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="m14.5 11l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarClipboardRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveLinearIcon],svg[solar-clipboard-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="m14.5 11l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarClipboardRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveOutlineIcon],svg[solar-clipboard-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.263 3.259A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.009c.763.015 1.423.055 1.987.158c.758.14 1.403.405 1.928.93c.602.602.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.368 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.336c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.93c.564-.103 1.224-.143 1.987-.158m.002 1.5c-.718.015-1.272.052-1.718.134c-.566.104-.895.27-1.138.514c-.277.277-.457.666-.556 1.4c-.101.755-.103 1.756-.103 3.191v6c0 1.436.002 2.437.103 3.192c.099.734.28 1.122.556 1.4c.277.276.665.457 1.4.555c.754.102 1.756.103 3.191.103h6c1.435 0 2.436-.001 3.192-.103c.734-.098 1.122-.279 1.399-.556c.277-.276.457-.665.556-1.399c.101-.755.103-1.756.103-3.192v-6c0-1.435-.002-2.436-.103-3.192c-.099-.733-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.514c-.446-.082-1-.119-1.718-.134A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zm-.53 8.78a.75.75 0 1 1 1.06-1.06L12 12.44l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97l1.97 1.97a.75.75 0 1 1-1.06 1.06L12 14.56l-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextBoldIcon],svg[solar-clipboard-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM7 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextBoldDuotoneIcon],svg[solar-clipboard-text-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 14.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardTextBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextBrokenIcon],svg[solar-clipboard-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 18h5.5"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9M7 14.5h1m7 0h-4"></svg:path></svg:g>`,
})
export class SolarClipboardTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextLineDuotoneIcon],svg[solar-clipboard-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 14.5h8"></svg:path><svg:path stroke-linecap="round" d="M7 18h5.5" opacity=".5"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextLinearIcon],svg[solar-clipboard-text-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"></svg:path><svg:path stroke-linecap="round" d="M7 14.5h8M7 18h5.5"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardTextLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextOutlineIcon],svg[solar-clipboard-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.263 3.26A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.01c.764.016 1.423.055 1.987.159c.758.14 1.403.404 1.928.93c.602.601.86 1.36.982 2.26c.116.866.116 1.969.116 3.336v6.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.525-.525 1.17-.79 1.928-.929c.564-.104 1.224-.143 1.987-.159m1.487.741V4.5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75zm7.985.76A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99c-.718.016-1.272.052-1.718.134c-.566.104-.895.272-1.138.515c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191v6c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-6c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.244-.243-.572-.41-1.138-.515c-.446-.082-1-.118-1.718-.133M6.25 14.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleBoldIcon],svg[solar-clock-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarClockCircleBold0"><svg:g fill="none"><svg:path fill="#fff" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarClockCircleBold0)"></svg:path>`,
})
export class SolarClockCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleBoldDuotoneIcon],svg[solar-clock-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClockCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
